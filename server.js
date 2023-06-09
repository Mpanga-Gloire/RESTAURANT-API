const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dbConfigs = require("./configs/db.configs");
const restaurantRouter = require("./routes/restaurant.routes");

mongoose.connect(dbConfigs.DB_URL);

const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to mongodb");
});

db.on("error", () => {
  console.log("Could not connect to mongodb");
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * ROUTERS
 */

app.use("/api/restaurant", restaurantRouter);

/**
 * ROUTERS
 */

app.listen(dbConfigs.PORT, () => {
  console.log(`Server started at port ${dbConfigs.PORT}`);
});
