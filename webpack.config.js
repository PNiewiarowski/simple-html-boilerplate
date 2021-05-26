const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: process.env.NODE_ENV === "production" ? "production" : "development",
    target: process.env.NODE_ENV === "production" ? "browserslist" : "web",

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
        ],
    },

    plugins: [
        new MiniCssExtractPlugin(),
    ],

    devtool: "source-map",

    devServer: {
        contentBase: "./dist/",
        hot: true
    }
}