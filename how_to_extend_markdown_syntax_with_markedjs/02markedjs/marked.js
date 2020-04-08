const {merge} = require("./helpers.js");
const {
  getDefaults,
  changeDefaults,
  defaults
} = require('./defaults.js');

function marked(src, opt, callback) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('marked(): input parameter is undefined or null');
  }
  if (typeof src !== 'string') {
    throw new Error('marked(): input parameter is of type '
      + Object.prototype.toString.call(src) + ', string expected');
  }

  // 如果存在第二个参数
  if (callback || typeof opt === 'function') {
    if (!callback) {
      callback = opt;
      opt = null;
    }
  }

  try {
    opt = merge({}, marked.defaults, opt || {});
    return Parser.parse(Lexer.lex(src, opt), opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';
    // if ((opt || marked.defaults).silent) {
    //   return '<p>An error occurred:</p><pre>'
    //     + escape(e.message + '', true)
    //     + '</pre>';
    // }
    throw e;
  }
}

marked.options =
  marked.setOptions = function(opt) {
    merge(marked.defaults, opt);
    // changeDefaults(marked.defaults);
    return marked;
  };

marked.defaults = defaults;

module.exports = marked;