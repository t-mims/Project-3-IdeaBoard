const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect('mongodb://localhost/Board' ),{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true,
  useFindAndModify:false
}
const userSeed = [
    {
        password: "x3gydashj3",
        username: "testJoe",
        email: "joe@joemail.com",
    }
    ,
    {
        password: "bob123",
        username: "testBob",
        email: "bob@email.com"
    }
    ,
    {
        password: "guest1",
        username: "testAlly",
        email: "ally@email.com"
    }
    ,
    {
        password: "password",
        username: "Username",
        email:"user@email.com"
    }
]
const boardSeed = [
    {
        user: "testJoe",
        comment: "My first board",
        name:"board 1"
    }
    ,
    {
        user: "testJoe",
        comment: "second board",
        name: "board 2"
    }
    ,
    {
        user: "testAlly",
        comment: "Al's board",
        name:"not pinterest"
    }
    ,
    {
        user: "Username",
        comment: "default",
        name:"default"
    }
    ,
    {
        user: "testJoe",
        comment: "III",
        name:"third"
    }
]
const pictureSeed = [
    {
        
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYzhqYD4vSzrmYwl2OAZ-2Mu7P3G09q5Dp3Q&usqp=CAU"
    },
    {
    
        imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD9QWUKeyHuBDkW0np6RBpVQEe8EV_e8J1uQ&usqp=CAU"
    },
    {
    
        imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0NNpcOZSHRVug82lo2o07KO6UGXyu27pYA&usqp=CAU"
    },
    
       
        {imageURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHrIVOO0Fx7dubB6pxLhTuYYkgWMNdHjOgzA&usqp=CAU"
    }
]
db.User.deleteMany({}).then(() => db.User.collection.insertMany(userSeed));
db.Board.deleteMany({}).then(() => db.Board.collection.insertMany(boardSeed));
db.Picture.deleteMany({}).then(() => db.Picture.collection.insertMany(pictureSeed));