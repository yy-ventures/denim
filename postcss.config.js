module.exports = {
  plugins: [
    // require('postcss-modules')(),
    require('cssnano')(),
    require('postcss-preset-env')(),
    require('postcss-normalize')(),
  ],
};
