var Backbone = require('backbone');
var $ = require('jquery');
var Client = require('../model/Client');
Backbone.$ = $;

var Room = Backbone.Collection.extend({
  model: Client
});