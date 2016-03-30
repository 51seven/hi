var Backbone = require('backbone');
var Message = require('./Message');
var GeoLocation = require('./GeoLocation');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.Model.extend({
  /*constructor: function(data) {
    //this.location = new Geolocation();
    this.username = data.username;
    this.color = data.color;
    Backbone.Model.apply(this, arguments); // Applies instance variables
  },*/
  defaults: {
    'username': '',
    'color': '#000333'
  },
  validate: function(attributes, options) {
    console.log("attributes", attributes);

    if(attributes.username.length < 3) {
      return "Username must not be < 3 Characters.";
    }

    if(!this.parseColor(attributes.color)) {
      return "Color has no valid format (#fff or #ffffff)";
    }
  },

  sendMessage: function() {

  },

  parseColor: function(code) {
    console.log(code); // Debug
    if(/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(code)) {
      return code;
    }
    else {
      return false;
    }
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
        _this.attributes.geo = data;
        console.log("Location", location);
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
