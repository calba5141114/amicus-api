'use strict';
module.exports = function(app) {
    
  var todoList = require('../controllers/messageController');

  // todoList Routes
  app.route('/messages')
    .get(todoList.list_messages)
    .post(todoList.create_a_message);


  app.route('/messages/:messageId')
    .get(todoList.read_a_message)
    .put(todoList.update_a_message)
    .delete(todoList.delete_a_message);
};