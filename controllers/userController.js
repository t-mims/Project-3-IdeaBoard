const db = require("../models");

//this file will contain all methods that will be used on the User model
module.exports = {
    //to select a user when retriving their ideaBoard info
    findUser: function (req, res) {
        db.User.findOne(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //making a new user
    createUser: function(req, res){
        db.User.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    // OPT for if they need to change an email or password
    updateUser: function (req, res) {
        db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    //------------------------------------
    // Adding in Board model into controller
    createBoard: function (req,res){
        db.Board.create(req.body)
        .then(dbModel=>res.json(dbModel))
        .catch(err=> res.status(422).json(err));
    },
    updateBoard: function (req, res){
        db.Board.findByIdAndUpdate({_id:req.params.id},req.body)
        .then(dbModel=> res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    removeBoard: function (req,res){
        db.Board.findByIdAndDelete({_id:req.params.id},req.body)
        .then(dbModel=> res.json(dbModel)
        .catch(err=> res.status(422).json(err)));
    },
    getBoards:function (req,res){
        console.log(req.user);
        db.Board.findOne({userID: req.userID})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};