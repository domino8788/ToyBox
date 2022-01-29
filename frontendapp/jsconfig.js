module.exports = {
  compilerOptions: {
    baseUrl: '.',
    target: 'ES6',
    module: 'CommonJS',
    noEmit: true,
    paths: {
      'components/*': ['./src/components/*'],
    },
  },
  include: ['src/**/*', '.eslintrc.js'],
  exclude: ['node_modules', '**/node_modules/*'],
};
