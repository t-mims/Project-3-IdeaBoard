const mongoose = require("mongoose");
const User = require("./user")

const Schema = mongoose.Schema;

const boardSchema = new Schema({
    //a description or comment entered for any item on the idea board
    name: {
        type:String,
        required: true
    }
    ,
    comment: {
        type: String,
        required: true
    }
    ,
    picture: {
        //string value of image url
        type: String,
        required: false
    }
    ,
    //a place for a numeric value if it's money or number-dependent 
    budget: {
        type: Number,
        required: false
    }
    ,
    //if a goal-oriented board, holds all goals within a goals array
    goals: {
        type: Array,
        required: false
    },
    boardID: Schema.Types.ObjectId,

    userID: ({
        type: Schema.Types.ObjectId,
        ref: User
    }),
})

const Board = mongoose.model("Board", boardSchema);

module.exports = Board;