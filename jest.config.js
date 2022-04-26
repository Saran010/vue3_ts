module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  globals: {
    'ts-jest': {
      useESM: true,
      // babelConfig: true,
    },
  },
};
