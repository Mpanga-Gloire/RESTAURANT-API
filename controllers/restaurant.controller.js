const Restaurant = require("../models/restaurant.model");
const converter = require("../utils/objectConverter");

exports.create = async (req, res) => {
  try {
    if (!Object.keys(req.body).length) {
      return res.status(400).json({
        message: "Content cannot be empty",
      });
    }

    const createdRestaurant = await Restaurant.create(req.body);
    res.status(200).json(createdRestaurant);
  } catch (error) {
    console.log("Some Internal error");

    res.status(500).json({
      message: "Some error occured  while creating the Restaurant",
    });
  }
};

exports.getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();

    res.status(200).json({
      restaurants,
      message: "Restaurants fetched successfully",
    });
  } catch (error) {
    console.log("Some error occured while fetching the Restaurants.");

    res.status(500).json({
      message: "Some error occured while fetching the Restaurants.",
    });
  }
};

exports.getRestaurantsByCategories = async (req, res) => {
  try {
    const categories = await Restaurant.find({}, { category: 1 });

    res.status(200).json(converter.categoriesConverter(categories));
  } catch (error) {
    console.log("Some error occurred while fetching Categories");

    res.status(500).json({
      message: "Some error occurred while fetching Categories",
    });
  }
};

exports.getRestaurantsByCategory = async (req, res) => {
  try {
    const categoryName = req.params.categoryName;
    const restaurants = await Restaurant.find({
      category: categoryName,
    }).collation({ locale: "en", strength: 2 });

    res.status(200).json(restaurants);
  } catch (error) {
    console.log("Some error occurred while fetching Categories");

    res.status(500).json({
      message: "Some error occurred while fetching Categories",
    });
  }
};

exports.getAllRestaurantsById = async (req, res) => {
  try {
    const id = req.params.id;
    const restaurant = await Restaurant.find({ _id: id });

    if (!restaurant.length) {
      res.status(404).json({
        message: "No Restaurant found with the given ID",
      });
    }
    res.status(200).json(restaurant);
  } catch (error) {
    console.log("Some error occurred while fetching Categories");

    res.status(500).json({
      message: "Some error occurred while fetching Categories",
    });
  }
};
