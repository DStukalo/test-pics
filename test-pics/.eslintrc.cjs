module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		"airbnb",
		"airbnb/hooks",
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/jsx-runtime",
		"./.eslintrc-typescript.cjs",
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react"],
	settings: {
		"import/resolver": {
			typescript: {},
		},
	},
	rules: {
		indent: [2, "tab"],
		"react/jsx-indent": [
			2,
			"tab",
			{ checkAttributes: false, indentLogicalExpressions: true },
		],
		"react/jsx-indent-props": [2, "tab"],
		"no-tabs": 0,
		"linebreak-style": [2, "unix"],
		quotes: [2, "single"],
		semi: [2, "always"],
		"no-plusplus": [2, { allowForLoopAfterthoughts: true }],
		"react/jsx-filename-extension": [
			2,
			{
				extensions: [".js", "jsx", ".ts", ".tsx"],
			},
		],
		"import/prefer-default-export": "off",
		"import/extensions": [
			2,
			"ignorePackages",
			{
				js: "never",
				jsx: "never",
				ts: "never",
				tsx: "never",
			},
		],
		"react/require-default-props": ["off"],
		"react/jsx-filename-extension": [
			2,
			{
				extensions: [".js", "jsx", ".ts", ".tsx"],
			},
		],
		"import/extensions": [
			2,
			"ignorePackages",
			{
				js: "never",
				jsx: "never",
				ts: "never",
				tsx: "never",
			},
		],
		"react/no-unknown-property": [2, { ignore: ["css"] }],
		"react/jsx-props-no-spreading": "off",
		"no-param-reassign": [
			"error",
			{
				props: true,
				ignorePropertyModificationsFor: ["state"],
			},
		],
	},
};
