module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: {
      modules: true,
    },
  },
  plugins: ["@typescript-eslint", "prettier"],
  extends: ["react-app", "prettier"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-uses-react": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": 0,
    "prettier/prettier": 0,
    "@typescript-eslint/restrict-template-expressions": ["off"],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^(_|action|state)",
      },
    ],
    "no-param-reassign": [
      "error",
      {
        ignorePropertyModificationsFor: ["state"],
        props: true,
      },
    ],
    "no-restricted-globals": "off",
    "prefer-const": "error",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
  },
};
