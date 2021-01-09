// const mongoose = require("mongoose");
//====Use just board model for MVP and add board IDs for all required images and comments, as well as
// user id to direct data instead of using sep. tables for now 



// const Schema = mongoose.Schema;

// const picturesSchema = new Schema({
// //user id
//   name: {
//     type: String,
//     trim: true,
//     required: "Enter your name"
//   },
// //board id
//   email: {
//     type: String,
//     match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
//   },
// //image id
//   username: {
//     type: String,
//     trim: true,
//     required: "Username is Required"
//   },
// //image URL
//   password: {
//     type: String,
//     trim: true,
//     required: "Password is Required",
//     validate: [({ length }) => length >= 6, "Password should be longer."]
//   },
  
//   userCreated: {
//     type: Date,
//     default: Date.now
//   }
// });

// const pictures = mongoose.model("pictures", picturesSchema);

// module.exports = pictures;