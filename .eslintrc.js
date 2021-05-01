const fs = require("fs");
const path = require("path");

const prettierOptions = JSON.parse(
	fs.readFileSync(path.resolve(__dirname, ".prettierrc"), "utf8")
);

module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ["airbnb", "prettier"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 12,
		sourceType: "module"
	},
	plugins: ["prettier", "react", "@typescript-eslint"],
	rules: {
		"prettier/prettier": ["error", prettierOptions]
	}
};
