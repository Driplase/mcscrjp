const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  let markdownOptions = {
		html: true,
		breaks: true,
		linkify: true,
	};

  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("scripts");
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.setLibrary("md", markdownIt(markdownOptions));

  return {
    templateFormats: ["html", "njk", "md"],
    markdownTemplateEngine: "njk",
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    }
  };
};
