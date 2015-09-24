Red Hat Mobile Basic Hybrid app
==========================

A basic Temperature Checker Hybrid App, will take city and state input, and ask the cloud for the current temperature.

###Take the default 'Hello World' Hybrid App and perform the following steps
###index.js
* We want the user to know this is an App that gets the temperature of the city they input.
Replace the description text, change the hello_to element to city and add a state element, then change the button id and text.

####Before
```html
           <p id="description">This is a basic Javascript App that can take in your name, send it to a cloud app and display the response.</p>
          <br>

          <div class="input-div">
              <input id="hello_to" type="text" class="input-text" placeholder="Enter Your Name Here."/>
          </div>

          <br>

          <button id="say_hello" type="button" class="say-hello-button">Say Hello From The Cloud</button>
```
####After
```html
          <p id="description">Check the temperature in your favorite city.</p>
          <br>

          <div class="input-div">
              <input id="city" type="text" class="input-text" placeholder="City"/>
              <input id="state" type="text" class="input-text" placeholder="State"/>
          </div>

          <br>

          <button id="get_temp" type="button" class="say-hello-button">Get Temperature</button>
```
* Change the included hello.js file to weather.js
####Before
```html
          <script src="hello.js"></script>
```
####After
```html
          <script src="weather.js"></script>
```
### hello.js
* Rename hello.js to weather.js
* We want to send the city and state input to our cloud App so modify weather.js to match the changes to your index.html file (Add an input check for good measure.)
```javascript
document.getElementById('say_hello').onclick = function () {
  document.getElementById('cloudResponse').innerHTML = "<p>Calling Cloud.....</p>";
  $fh.cloud(
      {
        path: 'hello',
        data: {
          hello: document.getElementById('hello_to').value
        }
      },
      function (res) {
        document.getElementById('cloudResponse').innerHTML = "<p>" + res.msg + "</p>";
      },
      function (code, errorprops, params) {
        alert('An error occured: ' + code + ' : ' + errorprops);
      }
  );
};
```
####After
```
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
  ```


# Grunt

This template uses [Grunt](http://gruntjs.com/), the Javascript Task Runner. To use Grunt with this Template App, do the following:

* Install grunt: ```npm install -g grunt-cli```
* In your App directory, run: ```npm install```. This installs Grunt plugins, etc for use with this App.
* Run ```grunt serve``` to preview this App locally


### Local development

You can also use Grunt to point your App at a local developement server. To do this, use the ```grunt serve:local``` command. Some notes on using the serve:local task:

* by default, the local server development url is: http://localhost:8001
* you can change this directly in your local Gruntfile.js, in the app config:

```
  app: {
    // configurable paths
    app: 'www',
    url: '',
    default_local_server_url: 'http://localhost:8001'
  },
```

* you can also pass a 'url' optional flag to server:local, e.g. ```grunt serve:local --url=http://localhost:9000```

* We can also write your own tasks by extending the Gruntfile.js, e.g. add a 'serve:live' target that hits your server in your live enivronment.
