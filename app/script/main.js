var $ = require('jquery');
var appView = require('./views/app');

$(function() {
  new appView({
    el: '#initpoint'
  });
});
