const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: {
    "home-page": "./src/pages/home.ts",
    "saved-page": "./src/pages/saved.ts",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
  },
  mode: "production",
  externalsPresets: { node: true },
  externals: [nodeExternals()],
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 3000,
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: "asset/resource",
      },
      {
        test: /\.svg$/,
        type: "asset/inline",
      },
      {
        test: /\.txt$/,
        type: "asset/source",
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(.js|.ts)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel-env", "@babel/preset-typescript"],
            plugins: [
              [
                "@babel/plugin-transform-runtime",
                {
                  regenerator: true,
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/page-template.hbs",
      chunks: ["home-page"],
      filename: "home-page.html",
      title: "Home | Looking At Things",
      description: "An App for looking at things",
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/page-template.hbs",
      chunks: ["saved-page"],
      filename: "saved-page.html",
      title: "Saved | Looking At Things",
      description: "Things you can look at later",
    }),
    new FaviconsWebpackPlugin({
      logo: "./src/assets/icon.png",
      mode: "webapp",
      devMode: "webapp",
      favicons: {
        appName: "Looking At Things",
        appDescription: "An App for looking at things",
        developerName: "Me",
        developerURL: null,
        background: "#ddd",
        theme_color: "#333",
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          favicons: true,
          windows: false,
          yandex: false,
        },
      },
    }),
  ],
  resolve: {
    extensions: [".ts", ".js"],
  },
};
