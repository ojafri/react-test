var config = {
  entry: './main.js',
   
  output: {
      path:'/build',
      filename: 'index.js'
  },
   
  devServer: {
     inline: true,
     port: 8080
  },
   
  module: {
     loaders: [
        {
           test: /\.jsx?$/,
           exclude: /node_modules/,
           loader: 'babel-loader',
           query: {
            presets: ['es2015', 'react']
         },
        },                
          { test: /\.css$/, loader: 'style-loader!css-loader' }, 
          { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
        ]}
  }


module.exports = config;