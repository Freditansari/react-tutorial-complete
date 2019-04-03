const path=require('path');
module.exports ={
    entry:'./src/app.js',
    output:{
        path: path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    module:{
        rules:[{
            loader:'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
            //add css loader and style loader from npm 
            // yarn add sass-loader@6.0.6 node-sass@4.5.3
            test: /\.s?css$/, 
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    ////!!!!! TODO:IMPORTANT DEBUG TOOLS!
    devtool:'cheap-module-eval-source-map', 
    devServer:{
        contentBase:path.join(__dirname,'public')
    }
};

//loader
/**
 * install babel-core and babel loader
 */