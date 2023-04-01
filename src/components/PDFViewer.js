// src/components/PDFViewer.js

import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = ({ file }) => {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="pdf-viewer" style={{ maxWidth: '80%', margin: '0 auto' }}>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(
          new Array(numPages),
          (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={Math.min(600, document.documentElement.clientWidth - 64)}
              renderTextLayer={false}
            />
          ),
        )}
      </Document>
    </div>
  );
};

export default PDFViewer;
