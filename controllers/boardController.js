var db = require("../models")

var boardController = {
    getBoards: function(req,res) {
        db.Board.find().then(function(results){
            res.json(results)
        })
    },
    createBoard: function(req,res){
        console.log(req.body)
        db.Board.create(req.body).then(function(results){
    
            res.json(results)
        })
    }
}

module.exports = boardController