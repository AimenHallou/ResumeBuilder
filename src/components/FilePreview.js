import React from 'react';
import './FilePreview.css';

const FilePreview = ({ content }) => {
  return (
    <div className="file-preview">
      {content ? <pre>{content}</pre> : <p>No file uploaded</p>}
    </div>
  );
};

export default FilePreview;