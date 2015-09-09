var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

(function () {
  'use strict';

  var Client = Backbone.Model.extend({
    constructor: function() {
      //this.location = new Geolocation();
      this.username = "";
      this.color = "";

      console.log(this);

      Backbone.Model.apply(this, arguments); // Applies instance variables
    },
    defaults: function() {
      return {
        username: "empty todo..."
      };
    },
    validate: function(attributes, options) {
      if(attributes.username.length < 3) {
        return "Username must not be < 3 Characters.";
      }
    },
    sendMessage: function() {

    },
    updateLocation: function() {
      // get location
      //this.save({location.update()});
    }
  });
})();
