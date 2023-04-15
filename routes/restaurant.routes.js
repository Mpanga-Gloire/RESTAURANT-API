const express = require("express");
const restaurantController = require("../controllers/restaurant.controller");
const restaurantRouter = express.Router();

restaurantRouter.post("/add", restaurantController.create);

restaurantRouter.get("/", restaurantController.getAllRestaurants);

restaurantRouter.get(
  "/categories",
  restaurantController.getRestaurantsByCategories
);

restaurantRouter.get(
  "/categories/:categoryName",
  restaurantController.getRestaurantsByCategory
);

module.exports = restaurantRouter;
