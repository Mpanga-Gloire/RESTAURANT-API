const express = require("express");
const restaurantController = require("../controllers/restaurant.controller");
const restaurantRouter = express.Router();

restaurantRouter.post("/restaurant/add", restaurantController.create);

restaurantRouter.get("/restaurant", restaurantController.getAllRestaurants);

module.exports = restaurantRouter;
