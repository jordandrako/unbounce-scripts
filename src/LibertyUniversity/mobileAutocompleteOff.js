$(document).ready(function () {

  // Find device OS type
  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    any: function () {
      return (isMobile.Android() || isMobile.iOS());
    }
  };

  // Turn off autocomplete
  if (isMobile.Android() || isMobile.iOS()) {
    $('.lp-pom-form form').attr('autocomplete', 'off');
  };
});
