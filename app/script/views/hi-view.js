var Backbone = require('backbone');
var $ = require('jquery');
var template = require('../templates/hi.hbs');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  initialize: function(){
    this.render();
  },

  render: function(){
    $('body').html(template({ name: "Timo" }));
  }
});