module.exports = {
  parser: "babel-eslint",
  extends: ['airbnb-base', 'plugin:jest/recommended', 'plugin:react/recommended', "prettier"],
  plugins: [
    'jest',
    'react'
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  rules: {
    "import/no-unresolved": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/display-name": "off",
    "react/prop-types": "off"
  }
};
