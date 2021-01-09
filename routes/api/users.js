
const express = require('express');
const router= require("express").Router();
const userController= require("../../controllers/userController");
//this file will utilize the controller and select methods based on request
//route will be "/api/user" + name in router 
router.get('/login',(req,res)=>{
    res.render('login');
})
router.get('/register',(req,res)=>{
    res.render('register')
    })
//Register handle
router.post('/register',(req,res)=>{
})
router.post('/login',(req,res,next)=>{
  })

//logout
router.get('/logout',(req,res)=>{
 })

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