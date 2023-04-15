const Restaurant = require("../models/restaurant.model");

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
      return res.status(404).json({
        message: "No Restaurant found with the given ID",
      });
    }
    res.status(200).json(restaurant);
  } catch (error) {
    console.log("Some error occurred while fetching  Restaurant");

    res.status(500).json({
      message: "Some error occurred while fetching  Restaurant",
    });
  }
};

exports.getAllRestaurantsByRatings = async (req, res) => {
  try {
    const rating = req.params.rating;

    const restaurants = await Restaurant.find({ rating: { $gte: rating } });

    res.status(200).json(restaurants);
  } catch (error) {
    console.log("Some error occurred while fetching  Restaurant");

    res.status(500).json({
      message: "Some error occurred while fetching  Restaurant",
    });
  }
};

exports.update = async (req, res) => {
  try {
    if (!Object.keys(req.body).length) {
      return res.status(400).json({
        message: "Restaurant Data is required",
      });
    }

    const id = req.params.id;

    const restaurant = await Restaurant.findOne({ _id: id });

    if (!restaurant) {
      return res.status(404).json({
        message: "No Restaurant found with the given ID",
      });
    }

    restaurant.name =
      req.body.name != undefined ? req.body.name : restaurant.name;
    restaurant.descripton =
      req.body.descripton != undefined
        ? req.body.descripton
        : restaurant.descripton;
    restaurant.category =
      req.body.category != undefined ? req.body.category : restaurant.category;
    restaurant.imageURL =
      req.body.imageURL != undefined ? req.body.imageURL : restaurant.imageURL;
    restaurant.location =
      req.body.location != undefined ? req.body.location : restaurant.location;
    restaurant.phone =
      req.body.phone != undefined ? req.body.phone : restaurant.phone;
    restaurant.rating =
      req.body.rating != undefined ? req.body.rating : restaurant.rating;

    await restaurant.save();

    res.status(200).json({
      message: "Restaurant updated succcessfully",
    });
  } catch (error) {
    console.log("Some Internal error " + error);

    res.status(500).json({
      message: "Some error occured  while creating the Restaurant",
    });
  }
};

exports.deleteOne = async (req, res) => {
  try {
    const id = req.params.id;

    const restaurant = await Restaurant.findOneAndDelete({ _id: id });

    res.status(200).json({
      restaurant,
      message: "Restaurant deleted successfully",
    });
  } catch (error) {
    console.log("Some Internal error " + error);

    res.status(500).json({
      message: "Some error occured  while deleting the Restaurant",
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const restaurant = await Restaurant.deleteMany();

    res.status(200).json({
      restaurant,
      message: "Restaurant deleted successfully",
    });
  } catch (error) {
    console.log("Some Internal error " + error);

    res.status(500).json({
      message: "Some error occured  while deleting the Restaurant",
    });
  }
};
