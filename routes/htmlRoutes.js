var db = require("../models");
var path = require("path");

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

  
  app.get("/PTA", function(req, res){
    console.log(req);
    res.sendFile(path.join(__dirname, "/../public/instructor.html"));
  });


  // Render 404 page for any unmatched routes **Needs to be at the end of all the routes**
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};
