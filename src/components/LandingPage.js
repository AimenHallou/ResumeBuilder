import React from 'react';
import DragAndDropArea from './DragAndDropArea';
import PDFViewer from './PDFViewer';

const LandingPage = ({ onFileDrop, loading, setLoading, file, error }) => {
  const isPDF = file && file.type === 'application/pdf';

  return (
    <div className="landing-page">
      <h1>{file ? 'Resume Actions' : 'Upload Your Resume'}</h1>
      <div className="file-content">
        {file ? (
          <>
            {isPDF && <PDFViewer file={file} />}
            <DragAndDropArea
              onDrop={onFileDrop}
              loading={loading}
              setLoading={setLoading}
              accept=".txt,.pdf,.docx,.md"
              maxSize={2000000}
            />
          </>
        ) : (
          <DragAndDropArea
            onDrop={onFileDrop}
            loading={loading}
            setLoading={setLoading}
            accept=".txt,.pdf,.docx,.md"
            maxSize={2000000}
          />
        )}
      </div>
      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
