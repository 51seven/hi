var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var Message = require('../models/Message');

var MessageList = Backbone.Collection.extend({
  model: Message
});

module.exports = new MessageList();