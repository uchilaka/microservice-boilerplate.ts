module.exports = {
  'presets': [
    ['@babel/preset-env', {
      targets: {
        node: '6.10',
      },
      modules: false,
    }]
  ],
  env: {
    test: {
      plugins: ['@babel/plugin-transform-modules-commonjs'],
    },
  },
}
