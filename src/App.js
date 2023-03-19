import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import MainPage from './components/MainPage';

function App() {
  const [fileContent, setFileContent] = useState(null);

  const onFileDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      setFileContent(reader.result);
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
            element={<LandingPage onFileDrop={onFileDrop} fileContent={fileContent} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
