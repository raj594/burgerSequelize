var express = require("express");
var bodyParser = require("body-parser");


// Import routes and give the server access to them.
var burgersController = require("./controllers/burgers_controller.js");


// Import the model (burger.js) to use its database functions.
var db = require("./models");
db.sequelize.sync();


var port = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Routes
require("./routes/burger-api-routes.js")(app);



app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

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

app.use("/api/burgers", burgersController);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
});