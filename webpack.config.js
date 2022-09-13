
const path = require('path');
const webpack = require("webpack");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
//   template: __dirname + '/public/index.html',
//   filename: 'index.html',
//   inject: 'body'
// });

// const BundleTracker = require('webpack-bundle-tracker')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode:'development',
    entry:{ 'main' : '/src/index.js'},
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "assets/dist")
   
    },
    // plugins:[HTMLWebpackPluginConfig],
    // plugins: [
    //     new CleanWebpackPlugin(),
        
    //     new BundleTracker({
    //       path: __dirname,
    //       filename: './webpack-stats.json',
    //     }),
        
    //   ],
    module: {
        // configuration regarding modules
        rules: [
            {
                // regex test for js and jsx files
                test: /\.(js|jsx|mjs|svg|)?$/,
                // don't look in any node_modules/ or bower_components/ folders
                exclude:  /(node_modules|bower_components|public)/,
                // for matching files, use the babel-loader
                //"start": "react-scripts start",
                use: {
                    loader: "babel-loader",
                    options: 
                        {presets: ["@babel/env", "@babel/preset-react"]},
                    },
            },
            {
                test:/\.(sa|sc|c)ss$/i,
                exclude: /(node_modules|bower_components|public)/,
                use: [
                    "style-loader",
                    "css-loader"  ,
                    // "sass-loader",
                ],

            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },

        ],
        
    },
    devServer:{
        static: path.resolve(__dirname, "assets/dist"),
        hot: true,
        devMiddleware: {
            writeToDisk: true,
        },
        proxy: {
            '!/app/Production**': {
              target: 'http://localhost:3000', // points to express dev server
              changeOrigin: true,
            },
        }   


        
    },
    
    
    
};