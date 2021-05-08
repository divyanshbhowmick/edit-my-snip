const rimraf = require("rimraf");

const {
	execShellCommand,
	copyFile,
	DIST_PATH,
	FILES_TO_COPY
} = require("./utility");

rimraf(DIST_PATH, async (err) => {
	if (err) console.log("Error", err);
	await execShellCommand("yarn build");
	FILES_TO_COPY.forEach((file) => {
		copyFile(file.src, file.dest);
	});
	console.log("Build Done!");
});
