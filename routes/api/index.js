const express = require('express');
const router = require("express").Router();
const userRoutes = require("./users");

router.get('/', (req,res)=>{
    res.render('welcome');
})
//register page
router.get('/register', (req,res)=>{
    res.render('register');
})

// user routes, likley to rename for sake of clarity
router.use("/user", userRoutes);

module.exports = router;
