const path = require('path');

module.exports = {
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-bundle.js'
    },
    module: {
        rules: [{ test: /\.txt$/, use: 'raw-loader' },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: ["babel-loader"],
          }
        ],
      },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
          },
        port: 9000,
        open: true,
      },
}

