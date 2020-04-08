// 测试 options = setOptions 合并可选参数
var marked = require('./marked.js');
marked.options({a: 1});
marked.options({b: 2});
marked.setOptions({c: 3});
console.log(marked);
