const express = require("express");
const createController = require("../controllers/create.controller");
const createRouter = express.Router();

createRouter.post("/restaurant/add", createController.create);

module.exports = createRouter;
