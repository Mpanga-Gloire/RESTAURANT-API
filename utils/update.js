const restaurantModel = require("../models/restaurant.model");

exports.updateObject = (restaurantObj, requestObj) => {
  restaurantObj.name =
    requestObj.name != undefined ? requestObj.name : restaurantObj.name;
  restaurantObj.descripton =
    requestObj.descripton != undefined
      ? requestObj.descripton
      : restaurantObj.descripton;
  restaurantObj.category =
    requestObj.category != undefined
      ? requestObj.category
      : restaurantObj.category;
  restaurantObj.imageURL =
    requestObj.imageURL != undefined
      ? requestObj.imageURL
      : restaurantObj.imageURL;
  restaurantObj.location =
    requestObj.location != undefined
      ? requestObj.location
      : restaurantObj.location;
  restaurantObj.phone =
    requestObj.phone != undefined ? requestObj.phone : restaurantObj.phone;
  restaurantObj.rating =
    requestObj.rating != undefined ? requestObj.rating : restaurantObj.rating;

  return restaurantObj;
};
