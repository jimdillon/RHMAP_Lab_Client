Red Hat Mobile Basic Hybrid app
==========================

A basic Temperature Checker Hybrid App.

###Take the default 'Hello World' Hybrid App and perform the following steps
* index.js
           - Replace the description text, chage the hello_to element to city and add a state element, then change the button id and text.

          ##Before

           <p id="description">This is a basic Javascript App that can take in your name, send it to a cloud app and display the response.</p>
          <br>

          <div class="input-div">
              <input id="hello_to" type="text" class="input-text" placeholder="Enter Your Name Here."/>
          </div>

          <br>

          <button id="say_hello" type="button" class="say-hello-button">Say Hello From The Cloud</button>

          ##After

          <p id="description">Check the temperature in your favorite city.</p>
          <br>

          <div class="input-div">
              <input id="city" type="text" class="input-text" placeholder="City"/>
              <input id="state" type="text" class="input-text" placeholder="State"/>
          </div>

          <br>

          <button id="get_temp" type="button" class="say-hello-button">Get Temperature</button>

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
