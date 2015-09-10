var Backbone = require('backbone');
var Message = require('./Message');
var GeoLocation = require('./GeoLocation');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.Model.extend({
  constructor: function(data) {
    //this.location = new Geolocation();
    this.username = data.username;
    this.color = data.color;
    Backbone.Model.apply(this, arguments); // Applies instance variables
  },
  defaults: {
    'color': "#f00"
  },
  validate: function(attributes, options) {
    if(attributes.username.length < 3) {
      return "Username must not be < 3 Characters.";
    }
  },

  sendMessage: function() {

  },

  /*setLocation: function(data) {
    this.geo = data;
    console.log("Client location: ", this.geo);
  },*/

  updateLocation: function() {
    var location = new GeoLocation();
    _this = this;

    return new Promise(function (resolve, reject) {
      console.log('starting geolocation...');

      location.update()
      .then(function(data) {
        _this.geo = data;
        resolve("resolve");
      })
      .catch(function(error) {
        console.log("unable to get location: ", error);
        reject(error);
      });
    });
    
    //location.update(this.setLocation);
  }
});