var db = require("../models");
var passport = require("../config/passport")

module.exports = function (app) {
  // Verify email not in use
  // app.post("/api/users", function (req, res) {
  //   var newUser = req.body;

  //   db.userTable.findOrCreate({
  //     where: {
  //       email: newUser.email
  //     },
  //     defaults: {
  //       name: newUser.name,
  //       userName: newUser.userName,
  //       // email: newUser.email,
  //       password: newUser.password
  //     }
  //   }).then(function (result) {
  //     res.send(result)
  //   })
  // })

  // app.post("/api/login", passport.authenticate("local"), function (req, res) {
  //   res.json("/PTA");
  // })

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
        console.log(result[1]);
        return res.send(result);
      
    });
  })


  // Verify Login
  app.post("/api/userVerify", passport.authenticate("local"), function (req, res) {
    console.log(req.body);
    var userCredentials = req.body;

    db.userTable.findOne({
      where: {
        email: userCredentials.email
      }
    }).then(function (results) {
      // console.log(results);
      console.log(results.dataValues.admin);
      if (results.dataValues.admin === true) {
        return res.json("/PTA")
      }
      (results.dataValues.admin === false) 
      res.json("/STU")
      
    })
  })


    // Route for getting some data about our user to be used client side
    app.get("/api/user_data", function(req, res) {
      if (!req.user) {
        // The user is not logged in, send back an empty object
        res.json({});
      }
      else {
        // Otherwise send back the user's email and id
        // Sending back a password, even a hashed password, isn't a good idea
        res.json({
          email: req.user.email,
          id: req.user.id,
          name: req.user.name,
          displayName: req.user.userName,
          theme: req.user.theme,
          picture: req.user.picture,
          linkedin: req.user.linkedin,
          github: req.user.github,
          instagram: req.user.instagram,
          facebook: req.user.facebook,
          twitter: req.user.twitter
          //portfolio: req.user.portfolio
        });
      }
    })

    //logs user out
    app.get("/logout", function(req, res){
      req.logout();
      req.session.destroy();
      res.redirect("/")
    })
  


}



