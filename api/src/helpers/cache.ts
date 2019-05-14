export const REDIS_HOST = process.env.CACHE_HOST || "127.0.0.1";

const chalk = require('chalk');
if (process.env.NODE_ENV === "script") {
  console.log(chalk.yellow("Not connecting to cache in script mode"))
}
const bluebird = require('bluebird');
export const redis = process.env.NODE_ENV !== "script" ? bluebird.promisifyAll(require('redis').createClient({
  host: REDIS_HOST
})) : undefined;
export const cache = require('apicache').options({
  debug: false,
  defaultDuration: '1 hour',
  statusCodes: {
    include: [ 200 ]
  },
  redisClient: redis
})
export const cacheMiddleware = cache.middleware;
