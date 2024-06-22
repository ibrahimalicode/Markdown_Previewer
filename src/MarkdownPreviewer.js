import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import Preview from "./Preview";
import "./App.css";

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    // Set default markdown text
    const defaultMarkdown = `
# Heading 1
## Heading 2
[Visit Google](https://www.google.com)
\`inline code\`
\`\`\`
// multi-line code block
function greet(name) {
  console.log('Hello, ' + name);
}
\`\`\`
- List item 1
- List item 2
> Blockquote
![React Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png)
**Bolded text**
    `;
    setMarkdown(defaultMarkdown);
  }, []);

  const handleMarkdownChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="markdown-previewer">
      <Editor markdown={markdown} onChange={handleMarkdownChange} />
      <Preview markdown={markdown} />
    </div>
  );
};

export default MarkdownPreviewer;
