const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    "home-page": "./src/controllers/home.ts",
    "saved-page": "./src/controllers/saved.ts",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[hash][ext][query]",
    publicPath: "",
    clean: true,
  },
  mode: "development",
  devServer: {
    port: 3000,
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    devMiddleware: {
      index: "home-page.html",
      writeToDisk: true,
    },
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg)$/,
        type: "asset/resource",
      },
      {
        test: /\.txt$/,
        type: "asset/source",
      },
      {
        test: /\.(.js|.ts)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel-env"],
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
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.module\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
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
        test: /\.hbs$/,
        use: ["handlebars-loader"],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [],
    }),
    new Dotenv({
      path: "./.env.dev",
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/home.hbs",
      chunks: ["home-page"],
      filename: "home-page.html",
      title: "Home | Looking At Things",
      description: "An App for looking at things",
      savedRoute: "/saved-page.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/saved.hbs",
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
        appName: "looking-at-things",
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
