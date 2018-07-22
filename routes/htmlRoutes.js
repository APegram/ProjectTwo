var db = require("../models");
var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
      res.render("index")
 });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  
  app.get("/PTA", isAuthenticated, function(req, res){
    console.log(req.user);
    if (req.user){
      console.log(req);
      res.sendFile(path.join(__dirname, "../views/instructor.handlebars"));
    }
  });


  // Render 404 page for any unmatched routes **Needs to be at the end of all the routes**
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};
