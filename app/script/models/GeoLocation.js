var Backbone = require('backbone');
var Promise = require('bluebird');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.Model.extend({
  defaults: {
    /*'id': null,
    'lat': null,
    'lng': null,
    'accuracy': 0,*/
    'options': {
      'enableHighAccuracy': false,
      'timeout': 5000,
      'maximumAge': 0
    }
  },
  update: function() {
    var _this = this;

    return new Promise(function(resolve, reject) {
      if(navigator.geolocation) {
        _this.id = navigator.geolocation.watchPosition(function(position) {
          var geo = {
            watchid: _this.id,
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            accuracy: position.coords.accuracy
          };

          _this.attributes = geo;

          resolve(geo);
        },
        function(error) {
          reject(error);
        }, 
        this.defaults);
      } 
      else {
        reject("nope"); //this.error({code: 1337, message: 'Geolocation is not supported :('}));
      }
    });
  },
  /*destroy: function() {
    navigator.geolocation.clearWatch(this.id);
  },*/
  /*success: function(position) {
    
    var geo = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
      accuracy: position.coords.accuracy
    };

    this.lat = geo.lat;
    this.lng = geo.lng;
    this.accuracy = geo.accuracy;

   // _this.callback(geo);
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
  }*/
});