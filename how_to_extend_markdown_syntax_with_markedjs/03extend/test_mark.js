const marked = require("./lib/marked.js");

let parsedContent = marked(`### 标题一\n我们只要==团结起来==，就一定能==战胜==新冠`);
console.log(parsedContent);