import type { Linter } from "eslint";

const config: Linter.BaseConfig = {
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "import/order": "error",
  },
  settings: {
    "import/resolver": {
      node: true,
      typescript: true,
    },
  },
};

export = config;
