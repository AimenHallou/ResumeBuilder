import React from 'react';
import DragAndDropArea from './DragAndDropArea';

const LandingPage = ({ onFileDrop, loading, fileContent }) => {
  return (
    <div className="landing-page">
      <h1>Upload your resume</h1>
      <DragAndDropArea onDrop={onFileDrop} loading={loading} />
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
