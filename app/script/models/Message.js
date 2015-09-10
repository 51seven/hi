var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.Model.extend({
  initialize: function() {
    console.log('Message model init');
  },
  defaults: {
    'content': "Hello"
  }
});