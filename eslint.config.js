import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import jsonc from 'eslint-plugin-jsonc';
import react from 'eslint-plugin-react';
import prettier from 'eslint-plugin-prettier';
import jsoncParser from 'jsonc-eslint-parser';
import babelParser from '@babel/eslint-parser';
import globals from 'globals';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    extends: [eslint.configs.recommended],
    languageOptions: {
      globals: { ...globals.node, ...globals.browser },
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        requireConfigFile: false,
        babelOptions: { presets: ['@babel/preset-react'] }
      }
    },
    plugins: { react, prettier },
    rules: {
      'no-undef': 'error',
      'no-use-before-define': 'error',
      'no-unused-vars': ['warn', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
      'react/jsx-uses-react': 'warn',
      'react/jsx-uses-vars': 'warn',
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': 'warn'
    },
    settings: { react: { version: 'detect' } }
  },
  {
    files: ['**/*.json'],
    languageOptions: { parser: jsoncParser },
    plugins: { jsonc, prettier },
    rules: { 'prettier/prettier': 'warn' }
  }
]);
