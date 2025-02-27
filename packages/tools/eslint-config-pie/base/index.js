const standard = [
    'eslint-config-airbnb-base'
];

const base = [
    './rules/best-practices',
    './rules/classes',
    './rules/errors',
    './rules/node',
    './rules/style',
    './rules/es6',
    './rules/imports'
].map(require.resolve);

module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
        node: true,
    },
    extends: [...standard, ...base],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        strict: 'error',
    },
};
