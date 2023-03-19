import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import MainPage from './components/MainPage';

function App() {
  const [fileContent, setFileContent] = useState(null);
  const [loading, setLoading] = useState(false);

  const onFileDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    setLoading(true);

    reader.onload = () => {
      setFileContent(reader.result);
      setLoading(false);
    };

    reader.readAsText(file);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/upload" element={<LandingPage onFileDrop={onFileDrop} loading={loading} fileContent={fileContent} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
