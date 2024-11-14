import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState(`# Heading 1
## Heading 2
[FreeCodeCamp](https://www.freecodecamp.org)
\`Inline code\`
\`\`\`
Code block
\`\`\`
- List item 1
- List item 2
> Blockquote
![Image](https://via.placeholder.com/150)
**Bold text**
`);

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  const getMarkdownHtml = (markdownText) => {
    return marked(markdownText, { breaks: true }); 
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          {/* Markdown Editor*/}
          <h3>Editor</h3>
          <textarea
            id="editor"
            value={markdown}
            onChange={handleChange}
            className="form-control"
            rows="10"
          />
        </div>
        <div className="col-md-6">
          {/* Vista previa */}
          <h3>Preview</h3>
          <div
            id="preview"
            className="preview"
            dangerouslySetInnerHTML={{ __html: getMarkdownHtml(markdown) }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
