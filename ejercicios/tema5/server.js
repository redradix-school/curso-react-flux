//Server example universal rendering
require('babel-core/register')({
  only: /src/
});
var path = require('path'),
    express = require('express'),
    app = express();

var renderUI = require('./server_render').renderUI;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

var categories = require('./dist/api/categories');
//router
app.get('/', function(req, res, next){
  var initialState = {
    categories: require('./dist/api/categories.json')
  };
  renderUI(req, res, next, initialState);
});

app.get('/c/:id/:slug', function(req, res, next){
  var initialState = {
    categories: categories,
    categoryId: parseInt(req.params.id),
    products: require('./dist/api/products/' + parseInt(req.params.id))
  }
  renderUI(req, res, next, initialState);
});

app.get('/cart', function(req, res, next){
  var initialState = {
    categories: categories
  }
  renderUI(req, res, next, initialState);
});

app.get('/checkout', function(req, res, next){
  var initialState = {
    categories: categories
  }
  renderUI(req, res, next, initialState);
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