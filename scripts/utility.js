const path = require("path");
const { BASE_PATH } = require("./constants/constants");
const fs = require("fs");
/**
 * Executes a shell command and return it as a Promise.
 * @param cmd {string}
 * @return {Promise<string>}
 */
function execShellCommand(cmd) {
	const exec = require("child_process").exec;
	return new Promise((resolve, reject) => {
		exec(cmd, (error, stdout, stderr) => {
			if (error) {
				console.warn(error);
			}
			resolve(stdout ? stdout : stderr);
		});
	});
}

/**
 * Resolves a path and gives the absolute path
 * @param {string} pathName
 * @returns {string}
 */
function getResolvedPath(pathName) {
	if (pathName) {
		if (pathName.charAt(0) === "/") pathName = pathName.substr(1);
		return path.join(BASE_PATH, `/${pathName}`);
	}
}

/**
 *
 * @param {string} src
 * @param {string} dest
 */
function copyFile(src, dest) {
	if (src && dest) {
		if (fs.existsSync(src)) {
			fs.copyFileSync(src, dest);
		}
	}
}

const DIST_PATH = getResolvedPath("/dist");

const FILES_TO_COPY = [
	{
		src: getResolvedPath("/dist/content.js"),
		dest: getResolvedPath("/public/js/content.js")
	},
	{
		src: getResolvedPath("/dist/background.js"),
		dest: getResolvedPath("/public/js/background.js")
	},
	{
		src: getResolvedPath("/dist/content.css"),
		dest: getResolvedPath("/public/css/content.css")
	}
];

module.exports = {
	getResolvedPath,
	execShellCommand,
	copyFile,
	DIST_PATH,
	FILES_TO_COPY
};
