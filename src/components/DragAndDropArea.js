import React, { useRef } from 'react';
import { useDropzone } from 'react-dropzone';

const DragAndDropArea = ({ onDrop, accept }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
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
      <input {...getInputProps()} ref={inputRef} />
      {isDragActive ? (
        <p>Drop the file here ...</p>
      ) : (
        <p>Drag and drop a file here or click to select a file</p>
      )}
    </div>
  );
};

export default DragAndDropArea;
