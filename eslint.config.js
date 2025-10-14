import filesystem from 'node:fs';
import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import jsonc from 'eslint-plugin-jsonc';
import react from 'eslint-plugin-react';
import prettier from 'eslint-plugin-prettier';
import jsoncParser from 'jsonc-eslint-parser';
import globals from 'globals';

const prettierConfig = JSON.parse(
  filesystem.readFileSync(new URL('.prettierrc', import.meta.url), 'utf8')
);

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    extends: [eslint.configs.recommended],
    languageOptions: {
      globals: { ...globals.node, ...globals.browser },
      parserOptions: { ecmaVersion: 'latest', sourceType: 'module', ecmaFeatures: { jsx: true } }
    },
    plugins: { react, prettier },
    rules: {
      'no-undef': 'error',
      'no-use-before-define': 'error',
      'no-unused-vars': ['warn', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
      'react/jsx-uses-react': 'warn',
      'react/jsx-uses-vars': 'warn',
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': ['warn', prettierConfig]
    },
    settings: { react: { version: 'detect' } }
  },
  { files: ['**/*.cjs'], languageOptions: { parserOptions: { sourceType: 'commonjs' } } },
  {
    files: ['**/*.json'],
    languageOptions: { parser: jsoncParser },
    plugins: { jsonc, prettier },
    rules: { 'prettier/prettier': ['warn', prettierConfig] }
  }
]);
