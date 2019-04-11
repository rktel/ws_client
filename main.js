const axios = require('axios');

// Make a request for a user with a given ID
/*
axios.get('http://10.12.1.80:8080/api/1.0?vehicle=AYX739&start=2019-04-10T00:00:00&end=2019-04-11T00:00:01')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
*/

var session_url = 'http://10.12.1.80:8080/api/1.0';
//var username = 'user';
//var password = 'password';
//var basicAuth = 'Basic ' + btoa(username + ':' + password);
var basicAuth = 'Basic ' + 'dm9sdm86dmx2X3NjcnRzXzA0XzIwMTk=';

axios.post(session_url,
    {},
    {
        headers: { 'Authorization': basicAuth },
        params: {
            vehicle: 'AYW913',
            start:'2019-04-10T00:00:00',
            end:'2019-04-11T00:00:00'
        }
    }
).then(function (response) {

    console.log(response.data);
    //+++++++++++++++++ TU CODIGO +++++++++++++//

}).catch(function (error) {

    console.log(error);

});