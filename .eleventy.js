const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");
const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {

	const md = markdownIt({
		html: true,
		linkify: true,
	  }).use(require("markdown-it-footnote"));
	
	eleventyConfig.setLibrary("md", md);
	eleventyConfig.addPreprocessor("drafts", "*", (data, content) => {
		if(data.draft && process.env.ELEVENTY_RUN_MODE === "build") {
			return false;
		}
	});
	eleventyConfig.addPassthroughCopy("./src/style.css");
	eleventyConfig.addPassthroughCopy("./src/assets");
	eleventyConfig.addPassthroughCopy("./src/rfjg-logo-48.svg");
	eleventyConfig.addPassthroughCopy("./src/favicon.png");
    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		// which file extensions to process
		extensions: "html",

		// Add any other Image utility options here:

		// optional, output image formats
		formats: ["webp", "jpeg"],
		// formats: ["auto"],

		// optional, output image widths
		// widths: [200, 800, 1200, "auto"],

		// optional, attributes assigned on <img> override these values.
		defaultAttributes: {
			loading: "lazy",
			decoding: "async",
		},
	});
    return {
		markdownTemplateEngine: "njk",
        dir: {
            input: "src",
            output: "public",
        },
    };
};