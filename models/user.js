module.exports = function(sequelize, Sequelize) {
  var User = sequelize.define("user", {
    admin: {type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false},
    name: {type: Sequelize.STRING, allowNull: false},
    userName: {type: Sequelize.STRING},
    email: {type: Sequelize.STRING, allowNull: false},
    password: {type: Sequelize.STRING, allowNull: false},
    theme: {type: Sequelize.STRING, allowNull: false, defaultValue: "Black"},
    issue: {type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false},
    stepOne: {type: Sequelize.BOOLEAN},
    stepTwo: {type: Sequelize.BOOLEAN},
    stepThree:  {type: Sequelize.BOOLEAN},
    stepFour: {type: Sequelize.BOOLEAN},
    stepFive: {type: Sequelize.BOOLEAN},
    stepSix: {type: Sequelize.BOOLEAN},
    stepSeven: {type: Sequelize.BOOLEAN},
    stepEight: {type: Sequelize.BOOLEAN},
    stepNine: {type: Sequelize.BOOLEAN},
    stepTen: {type: Sequelize.BOOLEAN},
    stepEleven: {type: Sequelize.BOOLEAN},
    stepTwelve: {type: Sequelize.BOOLEAN}
  });
  return User;
};
