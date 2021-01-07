const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const picturesSchema = new Schema({

  name: {
    type: String,
    trim: true,
    required: "Enter your name"
  },

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
  }
});

const pictures = mongoose.model("Pictures", picturesSchema);

module.exports = pictures;