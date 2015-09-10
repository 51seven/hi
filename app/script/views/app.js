var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var template = require('../templates/hi.hbs');
var Messages = require('../collections/messageList');
var Room     = require('../collections/Room');
var Message  = require('../models/Message');
var Client   = require('../models/Client');
var GeoLocation = require('../models/GeoLocation');

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
    /* ToDo: Roomdispatcher */
    var username = $('#usernameInput').val();
    var client = new Client({username: username});

    $('#usernameSend').attr('disabled', true);

    client.updateLocation()
    .then(function() {
      Room.add(client);
      $('#clients').append('<li style="color: '+client.color+'">'+client.username+'</li>');
      console.log('added '+client.username+' ['+client.geo.lat+'/'+client.geo.lng+'] to the room. ('+Room.length+')')

      $('#usernameInput').val("");
      $('#usernameSend').attr('disabled', false);
    })
    .catch(function(err) {
      console.log(err);
    });
  },

  addToCollection: function() {
    var content = $('#textinput').val();
    console.log('added ' + content + ' to collection');
    var message = new Message({ content: content });
    Messages.add(message);
  }


});