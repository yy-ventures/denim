module.exports = function(api) {

  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: 3,
        targets: {
          browsers: ["last 2 Chrome versions"]
        }
      }
    ]
  ];

  const plugins = [];

  return { presets, plugins };
};
