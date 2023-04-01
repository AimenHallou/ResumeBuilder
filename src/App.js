import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import MainPage from './components/MainPage';
import Spinner from './components/Spinner';

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const maxFileSize = 2 * 1024 * 1024;
  const [file, setFile] = useState(null);

  const onFileDrop = (acceptedFiles) => {
    setError(null);
    setLoading(true);

    const file = acceptedFiles[0];

    if (file.size > maxFileSize) {
      setError('File size exceeds the 2 MB limit. Please choose a smaller file.');
      setLoading(false);
      return;
    }

    if (file.type === 'application/pdf') {
      setFile(file);
      setLoading(false);
      setError(null);
    } else {
      const reader = new FileReader();

      reader.onload = () => {
        setFile({ ...file, content: reader.result });
        setLoading(false);
        setError(null);
      };

      reader.onerror = () => {
        setError('An error occurred while reading the file. Please try again.');
        setLoading(false);
      };

      reader.readAsText(file);
    }
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
                file={file}
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
