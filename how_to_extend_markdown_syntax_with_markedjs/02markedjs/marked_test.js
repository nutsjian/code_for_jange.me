const marked = require("./lib/marked.js");

let parsedContent = marked(`### 你好\`hello\`moto\n我们都是**中国人**，我们的口号是\`goodjob\`。我们一定胜利`);
console.log(parsedContent);
