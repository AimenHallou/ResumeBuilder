import React from 'react';

const FileDisplay = ({ content }) => {
  return (
    <div>
      {content ? <pre>{content}</pre> : <p>No file uploaded</p>}
    </div>
  );
};

export default FileDisplay;
