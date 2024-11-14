import React from 'react';
import marked from 'marked';  // Importa la librería para convertir Markdown a HTML

function Preview({ markdownText }) {
  return (
    <div id="preview" dangerouslySetInnerHTML={{ __html: marked(markdownText) }} />
  );
}

export default Preview;