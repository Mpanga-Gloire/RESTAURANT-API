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
