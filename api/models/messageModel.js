'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MessageSchema = new Schema({
content: {
    type: String,
    required: 'Kindly enter your message'
  },
  time_posted: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['sent', 'failed']
    }],
    default: ['sent']
  }
});

module.exports = mongoose.model('Messages', MessageSchema);