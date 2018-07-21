var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/examples", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // Verify email not in use
  app.post("/api/users", function (req, res) {
    var newUser = req.body;

    db.userTable.findOrCreate({
      where: {
        email: newUser.email
      },
      defaults: {
        name: newUser.name,
        userName: newUser.userName,
        // email: newUser.email,
        password: newUser.password
      }
    }).then(function (result) {
      res.send(result)
    })
  })

  // Verify Login
  app.post("/api/userVerify", function (req, res) {
    var userCredentials = req.body;

    db.userTable.findOne({
      where: {
        email: userCredentials.email
      }
    }).then(function (results) {
      // console.log(results);
      if (results.password !== userCredentials.password) {
        return res.send("failed");
      }

      if (results.admin === true){
        return res.send([results.name, "admin"]);
      } 

      //otherwise send student
      res.send([results.name, "student"]);
    })
  })
}