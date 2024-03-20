module.exports = function babel(api) {
  const BABEL_ENV = api.env();
  const presets = [
    [
      "@babel/preset-env",
      {
        modules: false,
      },
    ],
    "@babel/preset-react",
  ];
  // const plugins = [...];
  // if (BABEL_ENV === "development") {
  //   plugins.push("react-refresh/babel");
  // }
  return {
    presets,
    // plugins,
  };
};
