import React from 'react';
import DragAndDropArea from './DragAndDropArea';
import PDFViewer from './PDFViewer';

const LandingPage = ({ onFileDrop, loading, setLoading, file, error }) => {
  const isPDF = file && file.type === 'application/pdf';

  return (
    <div className="landing-page">
      <h1>Upload your resume</h1>
      <DragAndDropArea
        onDrop={onFileDrop}
        loading={loading}
        setLoading={setLoading}
        accept=".txt,.pdf,.docx,.md"
        maxSize={2000000}
      />
      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}
      {file ? (
        <div className="file-content">
          {isPDF ? (
            <PDFViewer file={file} />
          ) : (
            <pre>{file.content}</pre>
          )}
        </div>
      ) : (
        <div className="file-content">
          <p>No file uploaded</p>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
