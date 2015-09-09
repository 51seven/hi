var Backbone = require('backbone');
var $ = require('jquery');
var Client = require('../models/Client');
Backbone.$ = $;

var Room = Backbone.Collection.extend({
  model: Client
});

module.exports = new Room();