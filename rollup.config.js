import typescript from "rollup-plugin-typescript2";
import multi from "@rollup/plugin-multi-entry";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import css from "rollup-plugin-import-css";

const environment = process.env.NODE_ENV;

const BUNDLE_1 = {
	input: "src/chrome/background.ts",
	output: {
		file: "dist/background.js",
		sourcemap: environment !== "production" ? "inline" : false
	}
};
const BUNDLE_2 = {
	input: "src/chrome/content.tsx",
	output: {
		file: "dist/content.js",
		sourcemap: environment !== "production" ? "inline" : false
	}
};

const COMMON = {
	plugins: [
		multi(),
		resolve(),
		replace({
			"process.env.NODE_ENV": '"development"',
			preventAssignment: true
		}),
		commonjs({ include: ["./node_modules/**"] }),
		typescript({
			tsconfig: "tsconfig.json"
		}),
		css()
	]
};
export default [
	Object.assign({}, BUNDLE_1, COMMON),
	Object.assign({}, BUNDLE_2, COMMON)
];
