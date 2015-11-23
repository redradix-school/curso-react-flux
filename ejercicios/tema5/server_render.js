//server_render
var routes = require('./src/shop_routes').default;
var React = require('react'),
    ReactDOM = require('react-dom/server');
var Dispatcher = require('./src/app_dispatcher').default;
var match = require('react-router').match,
    RoutingContext = React.createFactory(require('react-router').RoutingContext);


exports.renderUI = function(req, res, next, initialState){
  console.log('RenderUI - matching:' + req.url);
  match({ routes: routes, location: req.url }, function(err, redirectLocation, renderProps){
    if(err){
      return res.status(500).send(error.message);
    }
    if(redirectLocation){
      return res.redirect(redirectLocation);
    }
    if(renderProps){
      //spread initialState across stores
      Dispatcher.dispatch({ type: '@@STORE:INIT', initialState: initialState || {} });
      var reactHTML = ReactDOM.renderToString(RoutingContext(renderProps));
      var html = `
        <!doctype html>
        <html>
          <head>
            <title>Universal Shopping Cart</title>
            <link rel="stylesheet" href="/index.css" />
          </head>
          <body>
            <div id="app">${reactHTML}</div>
            <script id="__initialState">window.__initialState = ${JSON.stringify(initialState)};</script>
            <script src="/bundle.js"></script>
          </body>
        </html>
      `;
      return res.status(200).send(html);
    }
    else {
      console.log('Nada de nada');

      next();
    }
  });
}