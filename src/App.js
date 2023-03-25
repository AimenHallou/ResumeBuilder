import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import MainPage from './components/MainPage';
import Spinner from './components/Spinner';

function App() {
  const [fileContent, setFileContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const maxFileSize = 2 * 1024 * 1024;
  const onFileDrop = (acceptedFiles) => {
    // Add these lines to reset the state before processing a new file
    setError(null);
    setFileContent(null);
    setLoading(true);
  
    const file = acceptedFiles[0];
  
    if (file.size > maxFileSize) {
      setError('File size exceeds the 2 MB limit. Please choose a smaller file.');
      setLoading(false);
      return;
    }
  
    const reader = new FileReader();
  
    reader.onload = () => {
      setFileContent(reader.result);
      setLoading(false);
      setError(null);
    };
  
    reader.onerror = () => {
      setError('An error occurred while reading the file. Please try again.');
      setLoading(false);
    };
  
    reader.readAsText(file);
  };
  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/upload"
            element={
              <LandingPage
                onFileDrop={onFileDrop}
                loading={loading}
                fileContent={fileContent}
                error={error}
              />
            }
          />
        </Routes>
      </Router>
      {loading && <Spinner />}
    </div>
  );
}

export default App;
