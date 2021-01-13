 const mongoose = require("mongoose");
// ====Use just board model for MVP and add board IDs for all required images and comments, as well as
//  user id to direct data instead of using sep. tables for now 



 const Schema = mongoose.Schema;

 const picturesSchema = new Schema({
   userID:{
     type: Number,
     required:true
   },
 boardID: {
    type: Number,
    required:true
   },
 imageID:{
     type: Number,
     required: true
   },
 imageURL: {
     type: String,
     required: true
   }
})

 const Pictures = mongoose.model("pictures", picturesSchema);

 module.exports = Pictures;