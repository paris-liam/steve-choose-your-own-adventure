const pluginSass = require("eleventy-plugin-sass");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginSass);
  eleventyConfig.setLibrary("html");
  eleventyConfig.addPassthroughCopy("images");
};