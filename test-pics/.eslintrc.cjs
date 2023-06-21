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
		"plugin:react/jsx-runtime",
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {
		"react/jsx-filename-extension": [
			2,
			{
				extensions: [".js", "jsx"],
			},
		],
		"import/extensions": [
			2,
			"ignorePackages",
			{
				js: "never",
				jsx: "never",
			},
		],
		"import/prefer-default-export": "off",
		"no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
		"no-tabs": 0,
		"react/jsx-indent": [
			2,
			"tab",
			{ checkAttributes: false, indentLogicalExpressions: true },
		],
		"react/jsx-indent-props": [2, "tab"],
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "single"],
		semi: ["error", "always"],
	},
};
