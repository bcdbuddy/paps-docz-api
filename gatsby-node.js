// gatsby-node.js
// const path = require("path");

exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: [
            {
              loader: "react-svg-loader",
              options: {
                es5: true
              }
            }
          ]
        }
      ]
    }
    //   resolve: {
    //     // ⚠ Note the '..' in the path because the docz gatsby project lives in the `.docz` directory
    //     modules: [path.resolve(__dirname, "../src"), "node_modules"],
    //     alias: {
    //       "@": path.resolve(__dirname, "../src/components/")
    //     }
    //   }
  });
};
