/**
 * stylelint.config
 */

module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order', 'stylelint-config-css-modules'],
  plugins: ['stylelint-order'],
  rules: {
    indentation: 2,
    'at-rule-no-unknown': [
      true,
      { ignoreAtRules: ['tailwind', 'mixin', 'extend', 'content', 'function', 'if', 'each', 'include'] }
    ],
    'declaration-block-trailing-semicolon': null,
    'declaration-colon-newline-after': null,
    'property-no-unknown': [true, { ignoreProperties: [] }],
    'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: ['ng-deep', 'v-deep'] }],
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['deep', 'global'] }],
    'selector-type-no-unknown': [true, { ignoreTypes: [/^uni-/] }],
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    'value-list-comma-newline-after': null
  }
};
