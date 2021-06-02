const path = require("path");

module.exports = {
	mode: 'production',
	entry: "./es5/true-math.js",
	output: {
		path: path.resolve(__dirname, "minified_from_es5"),
		filename: "true-math.min.js"
	}
};
