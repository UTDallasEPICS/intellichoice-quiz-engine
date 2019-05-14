var app = express();

// Create a function to generate multiple choices (random values)
// Should we store the unique ID for a user from their database in our database)

// QUESTION:
var questionSchema = new mongoose.Schema({
  question: String,
  level: Number,
  answer: String,
  subject: String,
  image: { data: Buffer, contentType: String }
})

var userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  grade: Number,
  sessions: Array,
  intellichoice_db: String // (private key) (obtain private key first time, create new user if not currently exists in our db)
})

export var Question = mongoose.model('Question', schema);
