const express = require('express');
const router= require("express").Router();
const userController= require("../../controllers/userController");

  router.route("/board")
  .get(userController.getBoards)
  .put(userController.updateBoard)
  .post(userController.createBoard)
  .delete(userController.removeBoard)
  

module.exports= router; 