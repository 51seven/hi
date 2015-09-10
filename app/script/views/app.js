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
    var username = $('#usernameInput').val();
    var color = $('#colorInput').val();

    var client = new Client({username: username});

    /*if(client.parseColor(color)) {
      client.set('color', color);
    }*/

    if(client.isValid()) {
      $('#usernameSend').attr('disabled', true);

      client.updateLocation()
      .then(function() {

        /* ToDo: Roomdispatcher */

        Room.add(client);

        $('#chatlog').append(client.get('username'), ' joined the room.');
        console.log(client.attributes, ' joined the room ('+Room.length+').')

        $('#clients').append('<li style="color: '+client.get('color')+'">'+client.get('username')+'</li>');
        $('#usernameInput').val("");
        $('#usernameSend').attr('disabled', false);
      })
      .catch(function(err) {
        console.log(err);
      });
    }
    else {
      console.log(client.validationError);
    }
  },

  addToCollection: function() {
    var content = $('#textinput').val();
    console.log('added ' + content + ' to collection');
    var message = new Message({ content: content });
    Messages.add(message);
  }


});