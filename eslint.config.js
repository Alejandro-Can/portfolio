import { defineConfig } from "eslint/config"
import js from "@eslint/js"
import globals from "globals"
import pluginReact from "eslint-plugin-react"


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,jsx}"], languageOptions: { globals: globals.browser } },
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "eol-last": ["error", "always"],
      "semi": ["error", "never"],
      "react/jsx-no-target-blank": "off",
      "react/prop-types": "off",
      "indent": ["error", 2],
      "space-before-function-paren": ["error", "never"]
    }
  }
])
