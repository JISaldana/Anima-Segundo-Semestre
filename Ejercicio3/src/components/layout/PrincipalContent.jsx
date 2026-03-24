import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function PrincipalContent() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch('/Content/content.md') 
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((err) => console.error("Error cargando el markdown:", err));
  }, []);

  return (
    <div>
      <div>
        <div>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default PrincipalContent;