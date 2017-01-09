var req = require('./weatherdemo.js');
var loc = require('./locinfo.js');

req(function(currentweather){
  console.log(currentweather);
});

loc(function(location){
  if(!location){
    console.log("unable to get loc");
    return;
  }
  console.log('log/lat:' +location.loc);
});
