const marked = require("./lib/marked.js");

let parsedContent = marked(`### 标题一\n{% customblock mode="1" %}\n自定义块级元素，**加粗**，*斜体*，随意内容\n{% endcustomblock %}`);
console.log(parsedContent);