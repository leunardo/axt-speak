module.exports = {
    "extends": "airbnb-base",
    // add your custom rules here
    'rules': {
    // don't require .js extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // allow mixed linebreak styles
    'linebreak-style': 'off',
    // allow void arrow functions
    'no-return-assign': 'off',
  }
};
