// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Import routes and give the server access to them.
var burgersController = require("./controllers/burgers_controller.js");
// Import the model (burger.js) to use its database functions.
var burger = require("./models/burger.js");


var port = process.env.PORT || 3000;

var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("public"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Routes
// =============================================================
require("./routes/burger-api-routes.js")(app);

app.use("/api/burgers", burgersController);

// Requiring our models for syncing
var db = require("./models");


// Syncing our sequelize models and then starting our Express app
// =============================================================

db.sequelize.sync().then(function() {
  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
});