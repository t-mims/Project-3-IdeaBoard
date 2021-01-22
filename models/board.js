const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const boardSchema= new Schema({
    //just the anme of the attached user
 
    //a description or comment entered for any item on the idea board
    comment:{
        type: String,
        required: true
    }
    ,
    picture:{
        //string value of image url
        type:String,
        required:false
    }
    ,
    //a place for a numeric value if it's money or number-dependent 
    budget:{
        type: Number,
        required:false
    }
    ,
    //if a goal-oriented board, holds all goals within a goals array
    goals:{
        type: Array,
        required: false
    }

})

const Board= mongoose.model("Board", boardSchema);

module.exports= Board;