const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/reactIdeaBoard");

const userSeed = [
    {
        name: "Joe Doe",
        password: "x3gydashj3",
        username: "testJoe",
        userID: 2
    }
    ,
    {
        name: "Bob",
        password: "bob",
        username: "testJoe",
        userID: 3
    }
    ,
    {
        name: "Ally",
        password: "guest",
        username: "testAlly",
        userID: 4
    }
    ,
    {
        name: "Name",
        password: "password",
        username: "Username",
        userID: 5
    }
]
const boardSeed = [
    {
        user: "testJoe",
        comment: "My first board",
        boardID: 1,
        userID: 2
    }
    ,
    {
        user: "testJoe",
        comment: "second board",
        boardID: 2,
        userID: 2
    }
    ,
    {
        user: "testAlly",
        comment: "Al's board",
        boardID: 1,
        userID: 4
    }
    ,
    {
        user: "Username",
        comment: "default",
        boardID: 1,
        userID: 5
    }
    ,
    {
        user: "testJoe",
        comment: "III",
        boardID: 3,
        userID: 2
    }
]
const pictureSeed = [
    {
        userID: 2,
        boardID: 1,
        imageID: 0,
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYzhqYD4vSzrmYwl2OAZ-2Mu7P3G09q5Dp3Q&usqp=CAU"
    },
    {
        userID: 2,
        boardID: 2,
        imageID: 1,
        imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD9QWUKeyHuBDkW0np6RBpVQEe8EV_e8J1uQ&usqp=CAU"
    },
    {
        userID: 2,
        boardID: 1,
        imageID: 2,
        imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0NNpcOZSHRVug82lo2o07KO6UGXyu27pYA&usqp=CAU"
    },
    {
        userID: 4,
        boardID: 1,
        imageID: 0,
        imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHrIVOO0Fx7dubB6pxLhTuYYkgWMNdHjOgzA&usqp=CAU"
    }
]
db.User.remove({}).then(() => db.User.collection.insertMany(userSeed));
db.Board.remove({}).then(() => db.Board.collection.insertMany(boardSeed));
db.Picture.remove({}).then(() => db.Picture.collection.insertMany(pictureSeed));

