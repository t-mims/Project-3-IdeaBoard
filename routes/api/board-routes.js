var router = require("express").Router()
var boardController = require("../../controllers/boardController")

router.route("/")
      .get(boardController.getBoards).post(boardController.createBoard)
      
      module.exports = router