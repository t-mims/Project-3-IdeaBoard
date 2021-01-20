const db = require("../models");

//this file will contain all methods that will be used on the User model
module.exports = {
    createBoard: function (req, res) {
        db.Board.create({
            name: req.body.name ,
            picture: req.body.picture ,
            comment: req.body.comment ,
            goals: req.body.goals ,
            budget: req.body.budget 
        })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    updateBoard: function (req, res) {
        db.Board.findOne({ _id: req.params._id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    removeBoard: function (req, res) {
        db.Board.findByIdAndDelete({ _id: req.params._id }, req.body)
            .then(dbModel => res.json(dbModel)
                .catch(err => res.status(422).json(err)));
    },
    getBoards: function (req, res) {
        console.log(req.user);
        db.Board.findOne({ userID: req.user.userID })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};