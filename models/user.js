const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({

  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },

  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 6, "Password should be longer."]
  },
  
  userCreated: {
    type: Date,
    default: Date.now
  },
  //we may also need to add an id for users
  userID:{
    type:Number,
    required:true
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;