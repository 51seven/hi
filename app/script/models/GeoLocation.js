var Backbone = require('backbone');
var Promise = require('bluebird');
var $ = require('jquery');
Backbone.$ = $;

_this = {};

module.exports = Backbone.Model.extend({
  defaults: {
    'id': null,
    'lat': null,
    'lng': null,
    'accuracy': 0,
    'options': {
      'enableHighAccuracy': false,
      'timeout': 5000,
      'maximumAge': 0
    }
  },
  update: function(callback) {
    _this.callback = callback;

    if(navigator.geolocation) {
      this.id = navigator.geolocation.watchPosition(this.success, this.error, this.options);
    } 
    else {
      this.error({code: 1337, message: 'Geolocation is not supported :('});
    }
  },
  /*destroy: function() {
    navigator.geolocation.clearWatch(this.id);
  },*/
  success: function(position) {
    
    var geo = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
      accuracy: position.coords.accuracy
    };

    this.lat = geo.lat;
    this.lng = geo.lng;
    this.accuracy = geo.accuracy;

    _this.callback(geo);
  },
  error: function(error) {
    var human_message = "";

    switch(error.code) {
      case error.PERMISSION_DENIED:
          human_message = "User denied the request for Geolocation."
          break;
      case error.POSITION_UNAVAILABLE:
          human_message = "Location information is unavailable."
          break;
      case error.TIMEOUT:
          human_message = "The request to get user location timed out."
          break;
      case error.UNKNOWN_ERROR:
          human_message = "An unknown error occurred."
          break;
    }

    console.log(error.code + " - " + error.message + "("+ human_message +")");
  }
});