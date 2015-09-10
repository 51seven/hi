var Backbone = require('backbone');
var Message = require('./Message');
var GeoLocation = require('./GeoLocation');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.Model.extend({
  constructor: function() {
    //this.location = new Geolocation();
    this.color = "#333";
    Backbone.Model.apply(this, arguments); // Applies instance variables
  },
  /*defaults: {
      username: "empty todo..."
  },*/
  validate: function(attributes, options) {
    if(attributes.username.length < 3) {
      return "Username must not be < 3 Characters.";
    }
  },

  sendMessage: function() {

  },

  setLocation: function(data) {
    this.location = data;

    console.log("Client location: ", this.location);
  },

  updateLocation: function() {
    var location = new GeoLocation();
    
    location.update(this.setLocation);
  }
});