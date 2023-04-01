import React, { useRef } from 'react';
import './FileUploader.css';

const FileUploader = ({ onFileDrop }) => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleChange = (event) => {
    const file = event.target.files[0];
    onFileDrop(file);
  };

  return (
    <div className="file-uploader" onClick={handleClick}>
      <label htmlFor="fileInput">
        <input
          type="file"
          id="fileInput"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleChange}
          accept=".pdf,.txt"
        />
        Click here to select a file
      </label>
    </div>
  );
};

export default FileUploader;