var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.Model.extend({
  constructor: function() {
    //this.location = new Geolocation();
    //this.username = "";
    //this.color = "";
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
  updateLocation: function() {
    // get location
    //this.save({location.update()});
  }
});