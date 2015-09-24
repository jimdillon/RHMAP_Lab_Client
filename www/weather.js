document.getElementById('get_temp').onclick = function () {
  document.getElementById('cloudResponse').innerHTML = "<p>Calling Cloud.....</p>";

  var path = '/' + document.getElementById('city').value
  + '/' + document.getElementById('state').value;

  $fh.cloud(
      {
        path: path,
        method: 'GET'
      },
      function (res) {
        document.getElementById('cloudResponse').innerHTML = "<p>" + res.msg + "</p>";
      },
      function (msg, err) {
        alert('An error occured: ' + msg + ' : ' + JSON.stringify(err));
      }
  );
};
