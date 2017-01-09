var request=  require('request');

var url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=fb39b998f58f6755799f94fca3220d41';

module.exports = function(callback){
  request({
  url: url,
  json: true
}, function(error, response,body){
  if(error){
    consolelog("unable to get weather");
  }else {
    console.log('It is '+ body.main.temp + ' in '+ body.name +'!');
  }
});
}
