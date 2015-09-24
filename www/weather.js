document.getElementById('get_temp').onclick = function () {
  var city = document.getElementById('city').value;
  var state = document.getElementById('state').value;

  if(city.length < 1  || state.length < 1) {
    alert('Please enter City and State.');
  }
  else {
    document.getElementById('cloudResponse').innerHTML = '<p>Calling Cloud.....</p>';
    var path = '/weather/temperature/' + city + '/' + state;

    $fh.cloud({
          path: path,
          method: 'GET'
        },
        function (res) {
          document.getElementById('cloudResponse').innerHTML = '<p>Current '
          + 'Temperature in ' + city + ', ' + state + ' is ' + res.temperature + '&deg; F</p>';
        },
        function (msg, err) {
          alert('An error occured: ' + JSON.stringify(msg) + ' : ' + JSON.stringify(err));
        }
      );
    }
  };
