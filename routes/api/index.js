const express = require('express');
const router = require("express").Router();
const userRoutes = require("./user");

// user routes, likley to rename for sake of clarity
router.use("/user", userRoutes);

module.exports = router;
