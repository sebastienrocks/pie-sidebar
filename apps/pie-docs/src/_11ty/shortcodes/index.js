const card = require('./card');
const categorisedIconList = require('./categorisedIconList');
const contentPageImage = require('./contentPageImage');
const globalTokensWarning = require('./notifications/globalTokensWarning');
const link = require('./link');
const list = require('./list');
const mediaElement = require('./mediaElementList');
const notification = require('./notification');
const resourceTable = require('./resourceTable');
const simpleTable = require('./simpleTable');
const tokensTable = require('./tokensTable');
const usage = require('./usage');

const { deindentHTML } = require('./shortcode-utilities');

/**
 * Adds all 11ty shortcodes
 * @param {object} eleventyConfig
 */
const addAllShortCodes = (eleventyConfig) => {
    eleventyConfig.addShortcode('card', (shortcodeArgs) => deindentHTML(card(shortcodeArgs)));
    eleventyConfig.addShortcode('categorisedIconList', (shortcodeArgs) => deindentHTML(categorisedIconList(shortcodeArgs)));
    eleventyConfig.addShortcode('contentPageImage', (shortcodeArgs) => deindentHTML(contentPageImage(shortcodeArgs)));
    eleventyConfig.addShortcode('globalTokensWarning', (shortcodeArgs) => deindentHTML(globalTokensWarning(shortcodeArgs)));
    eleventyConfig.addShortcode('link', (shortcodeArgs) => deindentHTML(link(shortcodeArgs)));
    eleventyConfig.addShortcode('list', (shortcodeArgs) => deindentHTML(list(shortcodeArgs)));
    eleventyConfig.addShortcode('mediaElementList', (shortcodeArgs) => deindentHTML(mediaElement(shortcodeArgs)));
    eleventyConfig.addShortcode('notification', (shortcodeArgs) => deindentHTML(notification(shortcodeArgs)));
    eleventyConfig.addShortcode('resourceTable', (shortcodeArgs) => deindentHTML(resourceTable(shortcodeArgs)));
    eleventyConfig.addShortcode('simpleTable', (shortcodeArgs) => deindentHTML(simpleTable(shortcodeArgs)));
    eleventyConfig.addShortcode('tokensTable', (shortcodeArgs) => deindentHTML(tokensTable(shortcodeArgs)));
    eleventyConfig.addShortcode('usage', (shortcodeArgs) => deindentHTML(usage(shortcodeArgs)));
};

module.exports = {
    addAllShortCodes,
};
