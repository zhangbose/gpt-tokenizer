import { ESLintConfig } from '@beemo/driver-eslint'

const config: ESLintConfig = {
  rules: {
    'import/no-unresolved': 'off',
    /** Node16 requires extensions. */
    'import/extensions': ['error', 'always'],
    /** Does not work; errors on `openai-chat-tokens`, but it's definitely
     * imported. */
    'import/no-extraneous-dependencies': 'off',
  },
  ignorePatterns: ['**/models/*.js'],
  ignore: [
    '.eslintrc.js',
    'babel.config.js',
    'prettier.config.js',
    'webpack.config.js',
  ],
}

export default config
