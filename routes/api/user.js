const router= require("express").Router();
const userController= require("../../controllers/userController");
//this file will utilize the controller and select methods based on request
//route will be "/api/user" + name in router 
router.route("/")
    .get(userController.findUser)
    .post(userController.createUser)
    
router.route("/:id")
    .get(userController.updateUser)

router.route("/user/:id")
    .get(userController.getBoards)
    .put(userController.updateBoard)
    .post(userController.createBoard)
    .delete(userController.removeBoard)

module.exports= router; 