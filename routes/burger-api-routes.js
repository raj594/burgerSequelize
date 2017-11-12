// Import the model (burger.js) to use its database functions.
var db = require("../models");

// Create our routes and set up logic within those routes where required.
module.exports = function(app) {
  app.post("/", function(req, res) {
      db.Burger.create({
        burger_name: req.body.text,
        devoured: false
      }).then(function(result) {
        // We have access to the new todo as an argument inside of the callback function
        res.json(result);
      });
  });

  app.put("/:id", function(req, res) {

    db.Burger.update({
        devoured: true
      }, {
        where: {
          id: req.body.id
        }
      }).then(function(result) {
        res.json(result);
    });


  });

  app.delete("/:id", function(req, res) {
      db.Burger.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(result) {
        res.json(result);
      });
  });
}