import React from "react";

const Editor = ({ markdown, onChange }) => {
  return (
    <textarea
      id="editor"
      value={markdown}
      onChange={onChange}
      placeholder="Enter markdown here..."
    />
  );
};

export default Editor;
