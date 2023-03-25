import React, { useState, useRef } from 'react';
import { useDropzone } from 'react-dropzone';

const DragAndDropArea = ({ onDrop, accept, maxSize }) => {
  const [error, setError] = useState(null);

  const onDropHandler = (acceptedFiles, fileRejections) => {
    if (fileRejections.length > 0) {
      let errorMessage = '';

      fileRejections.forEach((rejection) => {
        if (rejection.errors.length > 0) {
          rejection.errors.forEach((error) => {
            if (error.code === 'file-too-large') {
              errorMessage = 'File size exceeds the limit. Please upload a smaller file.';
            } else if (error.code === 'file-invalid-type') {
              errorMessage = 'Invalid file format. Please upload .txt, .pdf, .docx, or .md file.';
            }
          });
        }
      });

      setError(errorMessage);
      if (inputRef.current) {
        inputRef.current.value = null;
      }
    } else {
      setError(null);
      onDrop(acceptedFiles);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropHandler,
    accept,
    maxSize,
    noClick: true,
    noKeyboard: true,
  });

  const inputRef = useRef();

  const handleClick = (event) => {
    event.stopPropagation();
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div>
      <div
        {...getRootProps()}
        onClick={handleClick}
        style={{
          border: '2px dashed #cccccc',
          borderRadius: '10px',
          padding: '30px',
          textAlign: 'center',
          cursor: 'pointer',
        }}
      >
        <input {...getInputProps()} accept={accept} ref={inputRef} /> {/* Pass the accept prop to the input element */}
        {isDragActive ? (
          <p>Drop the file here ...</p>
        ) : (
          <p>Drag and drop a file here or click to select a file</p>
        )}
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default DragAndDropArea;
