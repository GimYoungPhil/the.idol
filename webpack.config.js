module.exports = {
    entry: {
      app: "./src/js/main.js"
    },
    output: {
        path: "./release",
        filename: "bundle.js",
    },
    devServer: {
      progress: true,
      colors: true,
      // hot: true,
      contentBase: "./build",
    }
};
