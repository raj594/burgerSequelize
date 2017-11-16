var db = require("../models");

module.exports = function(app) {



  app.put("/api/burgers/:id", function(req, res) {
    db.Burger.update({
      devoured: true,
    },
    {
      where: {
        id: req.params.id,
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  app.post("/api/new", function(req, res) {
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