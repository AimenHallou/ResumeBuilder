import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';

const MainPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/upload');
  };

  return (
    <div className="main-page">
      <h1>AI Resume Builder</h1>
      <button onClick={handleClick}>Start</button>
    </div>
  );
};

export default MainPage;
