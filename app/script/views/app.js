var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var template = require('../templates/hi.hbs');
var Messages = require('../collections/messageList');
var Message = require('../models/messages');

module.exports = Backbone.View.extend({
  initialize: function(){
    this.render();
  },

  el: '#initpoint',

  events: {
    'click #sendinput': 'addToCollection'
  },

  render: function() {
    $('#initpoint').html(template({ name: "Cowboy" }));
  },

  addToCollection: function() {
    var content = $('#textinput').val();
    console.log('added ' + content + ' to collection');
    var message = new Message({ content: content });
    Messages.add(message);
  }


});