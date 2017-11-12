// Import the model (burger.js) to use its database functions.
var express = require("express")
var router = express.Router();
var db = require("../models");


// Create our routes and set up logic within those routes where required.

router.post("/", function(req, res) {
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: false
    }).then(function(result) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(result);
    });
});

router.put("/:id", function(req, res) {

  db.Burger.update({
      devoured: true
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
  });


});

router.delete("/:id", function(req, res) {
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });
});


module.exports = router;