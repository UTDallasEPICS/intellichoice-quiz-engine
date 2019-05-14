// force pwetty colors
process.env.FORCE_COLOR = "1";

import * as express from "express";
import * as compression from "compression";
import * as bodyParser from "body-parser";
import * as morgan from "morgan";
// import * as passport from "passport";
import * as session from "express-session";
import * as _ from "lodash";
import * as util from "util";

// Database import
import * as mongoose from "mongoose";

const MongoStore = require('connect-mongo')(session);

const chalk = require('chalk');

console.log(chalk.green("==================================================="));
console.log(chalk.green("IntelliVision Quiz Engine Starting"));

const fs = require('fs');
if (fs.existsSync('.env')) {
  console.log(chalk.green("Loading environment variables from .env"));
  require('dotenv').config();
}

// Failure Handling
const unhandledRejection = require("unhandled-rejection");
let rejectionEmitter = unhandledRejection({
  timeout: 15
});
rejectionEmitter.on("unhandledRejection", (error: any, promise: any) => {
  console.error("Unhandled promise rejection", promise);
});

// Prepare database connection
const dbPath = (process.env.NODE_ENV === "test") ? "/intellivision-test" : "/intellivision";
const DATABASE_URI = "mongodb://" + process.env.DATABASE_PORT_27017_TCP_ADDR +  ":27017" + dbPath;
import { REDIS_HOST } from "./helpers/cache";

if (process.env.NODE_ENV !== "script") {
  console.log(chalk.green("Database: ", DATABASE_URI));
  console.log(chalk.green("Cache   : ", REDIS_HOST));
} else {
  console.log(chalk.red("Not connecting to database in script mode"))
}

// Connect to the Database
export const db = mongoose.connection;
if (process.env.NODE_ENV !== "script") {
  mongoose.connect(DATABASE_URI, { config: { autoIndex: true }, useNewUrlParser: true})
  .then(async () => {
    // perform initial database init here
  })
  .catch((err: any) => {
    console.error(err);
    process.exit(1);
  })
}

// init app
export let app = express();

let sessionStore = new MongoStore({
  mongooseConnection: db,
  touchAfter: 5 * 60, // cookie refresh interval 5 minutes
  ttl: 2 * 60 * 60, // 2 hours
  stringify: false // allow search
});

app.use(morgan('dev'));
app.use(compression());
app.use(bodyParser.json());
app.use(session({
  secret: process.env.SESSION_SECRET as string,
  saveUninitialized: false,
  rolling: true,
  resave: false,
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: 2 * 60 * 60 * 1000 // 2 hour login
  },
  store: sessionStore,
}))

// Load Api routes
import { routes } from "./routes/index";
if (process.env.NODE_ENV !== "script") {
  app.use('/api', routes);
}

// Error Handling
import { validate } from "./helpers/schema";
import { sendMongooseValidationError, getErrorForm, getJoiErrorForm } from "./helpers/errors";
app.use((err: any, req: any, res: any, next: any) => {
  if (err instanceof mongoose.Error) {
    // Mongoose Validation
    res.status(400).json({
      "message": "Some fields are incorrect!",
      "errors": sendMongooseValidationError(err)
    });
  } else if (err instanceof validate.ValidationError || (err["name"] && err["name"] === "ValidationError")) {
    console.error(err);
    if(err.errors) {
      // using Camo
      console.error(err.errors)
      res.status(400).json({
        "message": "Some fields are incorrect!",
        "errors": getErrorForm(err.errors)
      })
    } else if (err.details) {
      // directly from validator validate
      res.status(400).json({
        "message": "Some fields are incorrect",
        "errors": getJoiErrorForm(err.details)
      })
    } else {
      res.status(400).json({
        "message": "Some fields are incorrect",
        "errors": { }
      })
    }
  } else {
    next(err);
  }
});

//  Handle 200 successes
app.use((err: any, req: any, res: any, next: any) => {
  if (err && err.status && err.status == 200) {
    delete err.status;
    res.send(err);
  } else {
    next(err);
  }
});

// Handle other errors
app.use((err: any, req: any, res: any, next: any) => {
  if (!err) {
    err = { }
  } else if (err.status && err.status != 500) {
    console.error(err);
    res.status(err.status);
  } else {
    console.error(err);
    res.status(500);
    err.status = 500;
    err.detail = err.detail || err.stack;
    err.message = "An internal error occurred";
  }
  res.json({
    "message": err.message || "An unknown error has occurred",
    "status": err.status || err.errorCode,
    "detail": err.detail || "",
    "errors": err.errors || undefined,
    "action": err.action || undefined
  });
});

// Handle 404 errors
app.use((req: any, res: any, next: any) => {
  res.status(404).send({ message: "Endpoint does not exist!"})
})

//open server
if (process.env.NODE_ENV !== "script") {
  app.listen(process.env.PORT || 3000, () => {
    console.log(chalk.green.bold("RUNNING on port " + (process.env.PORT || 3000)))

    console.log(chalk.gray("==========================================="));

    //rewrite log statements to include file and line numbers
    ['log', 'warn', 'error', 'trace'].forEach((methodName: any) => {
      const originalMethod: any = (console as any)[methodName];
      (console as any)[methodName] = (...args: any[]) => {
        let initiator = 'unknown';
        try {
          throw new Error();
        } catch (e) {
          if (typeof e.stack === 'string') {
            let isFirst = true;
            for (const line of e.stack.split('\n')) {
              const matches = line.match(/^\s+at\s+(.*)/);
              if (matches) {
                if (!isFirst) { // first line - current function
                                // second line - caller (what we are looking for)
                  initiator = matches[1];
                  initiator = initiator.split('/')[0] + _.join(initiator.split('/').splice(3), '/');
                  break;
                }
                isFirst = false;
              }
            }
          }
        }
        var color = (a: any) => { return a };
        if (methodName == "warn") color = chalk.yellow;
        if (methodName == "error") color = chalk.red;
        for (var i=0; i<args.length; i++) {
          if (_.isPlainObject(args[i]))
            args[i] = JSON.stringify(args[i], null, 2)
          else if (!_.isString(args[i]))
            args[i] = util.inspect(args[i]);

          args[i] = color(args[i]);
        }
        originalMethod.apply(console, [...args, chalk.gray(`at ${initiator}`)]);
      };
    });
  });
}
