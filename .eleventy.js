const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");
const { feedPlugin } = require ("@11ty/eleventy-plugin-rss");
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
	eleventyConfig.addPlugin(feedPlugin, {
		type: "atom", // or "rss", "json"
		outputPath: "/feed/feed.xml",
		templateData: {
			eleventyNavigation: {
				key: "Feed",
				order: 4
			}
		},
		collection: {
			name: "post",
			limit: 10,
		},
		metadata: {
			language: "en",
			title: "Resources For Jazz Guitar",
			subtitle: "Practice materials and serious music theory for Jazz Guitar.",
			base: "https://resourcesforjazzguitar.com/",
			author: {
				name: "Chester Jankowski"
			}
		}
	});
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