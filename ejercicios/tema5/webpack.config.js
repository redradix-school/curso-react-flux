var path = require('path');

var outPath = path.join(__dirname, 'dist');
var IS_DEV = (process.env.NODE_ENV === 'development');
console.log('Webpack config. Environment: ', (IS_DEV ? 'development' : 'production'));

var devConfig = {
  entry: [
    './src/app.js'
  ],
  output: {
    path: outPath,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js*/,
        include: path.join(__dirname, 'src'),
        loaders: ['react-hot', 'babel']
      }
    ]
  }
};

var prodConfig = {
  entry: [
    './src/app.js'
  ],
  output: {
    path: outPath,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js*/,
        include: path.join(__dirname, 'src'),
        loaders: ['babel']
      }
    ]
  }
}

module.exports = IS_DEV ? devConfig : prodConfig;