//Server example universal rendering
require('babel-core/register')({
  only: /src/
});
var path = require('path'),
    express = require('express'),
    app = express();

var React = require('react'),
    ReactDOM = require('react-dom/server');
var match = require('react-router').match,
    RoutingContext = React.createFactory(require('react-router').RoutingContext);

var routes = require('./src/shop_routes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//router
app.get('*', function(req, res, next){
  match({ routes, location: req.url }, function(err, redirectLocation, renderProps){
    if(err){
      res.status(500).send(error.message);
    }
    if(renderProps){
      var reactHTML = ReactDOM.renderToString(RoutingContext(renderProps));
      console.log('React server render');
      var html = `
        <html>
          <head>
            <title>Universal Shopping Cart</title>
            <link rel="stylesheet" href="index.css" />
          </head>
          <body>
            <div id="app">${reactHTML}</div>
            <script src="bundle.js"></script>
          </body>
        </html>
      `;
      res.status(200).send(html);
    }
    else {
      next();
    }
  });
});

//archivos estáticos
app.use(express.static(path.join(__dirname, 'dist')));

app.use('*', function(req, res){
  res.status(404).end();
});

app.listen(3000, 'localhost', function(err){
  if(err){
    throw err;
  }
  console.log('Express listening on http://localhost:3000');
});