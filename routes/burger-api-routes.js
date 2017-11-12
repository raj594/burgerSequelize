var db = require("../models");

module.exports = function(app) {

  app.get("/", function(req, res) {
    db.Burger.findAll({})
    .then(function(data) {
      var hbsObject = {
        burger: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });


  app.get("/api", function(req, res) {
    // 1. Add a join to include all of each Author's Posts
    db.Burger.findAll({}).then(function(result) {
      res.json(result);
    });
  });

  app.put("/api/burgers/:id", function(req, res) {
    // 2; Add a join to include all of the Author's Posts here
    db.Burger.update({
      devoured: true,
    },
    {
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  app.post("/api/burgers", function(req, res) {
    console.log(req.body)
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: false
    }).then(function(result) {
      res.json(result);
    });
  });

  app.delete("/api/burgers/:id", function(req, res) {
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });

};