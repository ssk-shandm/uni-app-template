import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import prettierConfig from "eslint-config-prettier"; 

export default [

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["vue3-recommended"],
  prettierConfig, 


  {
    ignores: ["node_modules/", "dist/", "unpackage/", "src/static/", "*.d.ts"],
  },


  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        uni: "readonly",
        wx: "readonly",
        plus: "readonly",

        'vue/setup-compiler-macros': 'readonly',
      },

      parserOptions: {
        parser: tseslint.parser, 
      },
    },

    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'off',
      'vue/multi-word-component-names': 'off', 
    }
  }
];