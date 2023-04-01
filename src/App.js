// src/App.js

import React, { useState } from 'react';
import { DropzoneAreaBase } from 'material-ui-dropzone';
import { Box, Typography } from '@material-ui/core';
import PDFViewer from './components/PDFViewer';

function App() {
  const [fileContent, setFileContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onFileDrop = (acceptedFiles) => {
    if (acceptedFiles.length === 0) {
      return;
    }

    setLoading(true);
    const file = acceptedFiles[0];

    const reader = new FileReader();

    reader.onload = () => {
      setFileContent(acceptedFiles[0]);
      setLoading(false);
      setError(null);
    };

    reader.onerror = (error) => {
      setLoading(false);
      setError('Error reading file');
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="App">
      <Box>
        <Typography variant="h4">Upload your PDF</Typography>
        <DropzoneAreaBase
          acceptedFiles={['application/pdf']}
          filesLimit={1}
          maxFileSize={5000000}
          onDrop={onFileDrop}
          showFileNames
          dropzoneText="Drag and drop a PDF file here or click to upload"
        />
      </Box>
      {loading && <Typography variant="h6">Loading...</Typography>}
      {error && <Typography variant="h6">{error}</Typography>}
      {fileContent && <PDFViewer file={fileContent} />}
    </div>
  );
}

export default App;
