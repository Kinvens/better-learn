module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  rules: {
    'at-rule-no-unknown': [
      true,
      { ignoreAtRules: ['mixin', 'extend', 'content', 'include'] }
    ],
    indentation: 4,
    'no-descending-specificity': null
  }
}
