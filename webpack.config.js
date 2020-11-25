const path = require('path'); //for being able to use absolute path for specifying output
const postCSSPlugins = [
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
];

module.exports = {
    /* Entry as nescessary (default: src/index */
    /* Output as necessary (default: dist/main) */
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        before: function (app, server) {
            server._watch('./dist/**/*.html');
        },
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        hot: true,
        host: '0.0.0.0',
        port: 3000,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: { postcssOptions: { plugins: postCSSPlugins } }
                    }
                ]
            }
        ]
    }
};
