'use strict';

var executeJSONPrequest = function(url, callback) {
  var callbackName = 'JSONPCallback';
  window[callbackName] = callback;
  var script = document.createElement('script');
  script.src = url + '?callback=' + callbackName;
  document.body.appendChild(script);
};


executeJSONPrequest('http://localhost:1506/api/pictures', function(pictures) {
  window.pictures = pictures;
});


