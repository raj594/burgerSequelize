// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  //index route loads view.html
  app.get("/", function(req, res) {
    db.Burger.findAll({})
    .then(function(data) {
      var hbsObject = {
        burger: data
      };
      res.render("index", hbsObject);
    });
  });
};
