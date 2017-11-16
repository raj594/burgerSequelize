var db = require("../models");

module.exports = function(app) {

  // app.get("/api/customers", function(req, res) {
  //   db.Customer.findAll({}).then(function(results) {
  //     res.json(results);
  //   });
  // });

  // app.put("/api/customers/:id", function(req, res) {
  //   // 2; Add a join to include all of the Author's Posts here
  //   db.Customer.findOne({
  //     where: {
  //       id: req.params.id,
  //       include: [db.Burger]
  //     }
  //   }).then(function(results) {
  //     res.json(results);
  //   });
  // });

  // app.post("/api/customers", function(req, res) {
  //   db.Customer.create(req.body).then(function(results) {
  //     res.json(results);
  //   });
  // });

  // app.delete("/api/customers/:id", function(req, res) {
  //   db.Customer.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(results) {
  //     res.json(results);
  //   });
  // });

};
