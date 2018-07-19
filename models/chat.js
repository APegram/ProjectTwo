// This is to be filled out when we have decided how the chat table will look.

module.exports = function(sequelize, Sequelize) {
    var Chats = sequelize.define("chats", {
    //   text: {type: Sequelize.STRING},
    //   name: {type: Sequelize.STRING},
    //   stepNum: {type: Sequelize.INTEGER}
    });
    return Chats;
  };