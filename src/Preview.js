import React from "react";
import * as marked from "marked";

const Preview = ({ markdown }) => {
  const getMarkdownText = () => {
    // Use marked library to parse markdown to HTML
    const rawMarkup = marked.parse(markdown, { sanitize: true });
    return { __html: rawMarkup };
  };

  return <div id="preview" dangerouslySetInnerHTML={getMarkdownText()} />;
};

export default Preview;
