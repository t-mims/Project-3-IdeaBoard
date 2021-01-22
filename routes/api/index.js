const express = require('express');
const router = require("express").Router();
const userRoutes = require("./user");
const boardRoutes = require("./board-routes.js");

// user routes, likley to rename for sake of clarity
router.use("/user", userRoutes);
router.use("/board", boardRoutes);


module.exports = router;
