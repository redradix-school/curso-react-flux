//Server example universal rendering

var path = require('path'),
    express = require('express'),
    app = express();

var React = require('react'),
    ReactDOM = require('react-dom/server');
var match = require('react-router').match,
    RoutingContext = require('react-router').RoutingContext;

var App = require('./src/universal_app'),
    routes = App.Routes;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//log
app.use('*', function(req, res, next){
  console.log(req.method, req.url);
  next();
});
//archivos estáticos
app.use(express.static(path.join(__dirname, 'dist')));

//router
app.get('*', function(req, res, next){
  match({ routes, location: req.url }, function(err, redirectLocation, renderProps){
    if(err){
      res.status(500).send(error.message);
    }
    console.log(err, redirectLocation, renderProps);
    if(renderProps){
      res.status(200).send(ReactDOM.renderToString(<RoutingContext {...renderProps} />))
    }
    else {
      next();
    }
  });
});

app.use('*', function(req, res){
  res.status(404).end();
})

app.listen(3000, 'localhost', function(err){
  if(err){
    throw err;
  }
  console.log('Express listening on http://localhost:3000');
});