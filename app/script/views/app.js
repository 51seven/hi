var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var template = require('../templates/hi.hbs');
var Messages = require('../collections/messageList');
var Room     = require('../collections/Room');
var Message  = require('../models/messages');
var Client   = require('../models/Client');

module.exports = Backbone.View.extend({
  initialize: function(){
    this.render();
  },

  el: '#initpoint',

  events: {
    'click #sendinput': 'addToCollection',
    'click #usernameSend': 'addUserToRoom'
  },

  render: function() {
    $('#initpoint').html(template({ name: "Cowboy" }));
  },

  addUserToRoom: function() {
    var username = $('#usernameInput').val();
    var client = new Client({username: username});

    console.log(client);

    Room.add(client);
  },

  addToCollection: function() {
    var content = $('#textinput').val();
    console.log('added ' + content + ' to collection');
    var message = new Message({ content: content });
    Messages.add(message);
  }


});