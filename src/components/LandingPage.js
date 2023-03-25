import React from 'react';
import DragAndDropArea from './DragAndDropArea';

const LandingPage = ({ onFileDrop, loading, setLoading, fileContent, error }) => {
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
      {fileContent ? (
        <div className="file-content">
          <pre>{fileContent}</pre>
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
