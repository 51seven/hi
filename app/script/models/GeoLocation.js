var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var GeoLocation = Backbone.Model.extend({
  defaults: function() {
    return {
      id: null
      lat: null,
      lng: null,
      accuracy: 0,
      options = {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 0
      }
    };
  },
  update: function() {
    if (navigator.geolocation) {
      this.id = navigator.geolocation.watchPosition(success, error, this.options);
    } 
    else {
      this.error({code: 1337, message: 'Geolocation is not supported :('});
    }
  },
  /*destroy: function() {
    navigator.geolocation.clearWatch(this.id);
  },*/
  success: function(position) {
    alert("geolocation successfull");

    return {
      position.coords.latitude,
      position.coords.longitude,
      position.coords.accuracy
    };
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

    alert(error.code + " - " + error.message + "("+ human_message +")");
  }
});