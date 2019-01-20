const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
  //always expect a string for this value
  //Schema describes what every individual record is going to look like
});

mongoose.model('users', userSchema);
//name of the collection, then userSchema
//Will look for collection in the databse, won't  overwrite, but Will
//create them if they don't already exist. Can add in additional properties
// to the schema with problems
