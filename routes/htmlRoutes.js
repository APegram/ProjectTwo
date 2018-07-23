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
    if (req.user){
      res.render("instructor", {layout: "inClass.handlebars"});
    }
  });
  
  app.get("/STU", isAuthenticated, function(req, res){
    if (req.user){
      res.render("student", {layout: "inClass.handlebars"});
    }
  });



  // Render 404 page for any unmatched routes **Needs to be at the end of all the routes**
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};
