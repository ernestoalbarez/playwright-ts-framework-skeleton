import { defineConfig } from 'eslint-define-config';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import playwrightPlugin from 'eslint-plugin-playwright';

export default defineConfig({
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    globals: {
      process: 'readonly',
      __dirname: 'readonly',
      module: 'readonly',
    },
  },
  plugins: {
    '@typescript-eslint': tsPlugin,
    playwright: playwrightPlugin,
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-undef': 'error',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  ignores: [
    'node_modules/**',
    'dist/**',
    'playwright-report/**'
  ],
});
