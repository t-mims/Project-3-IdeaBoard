const express = require('express');
const router = require("express").Router();
const userRoutes = require("./user");

router.get('/', (req,res)=>{
    res.render('login');
})
//register page
router.get('/register', (req,res)=>{
    res.render('register');
})
router.get('/login', (req,res)=>{
    res.render('login');
})

// user routes, likley to rename for sake of clarity
router.use("/user", userRoutes);

module.exports = router;
