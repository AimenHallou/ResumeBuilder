// src/components/MainPage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';
import './MainPage.css';

const MainPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/upload');
  };

  return (
    <Container className="main-page" maxWidth="sm">
      <Typography variant="h3" gutterBottom>
        AI Resume Builder
      </Typography>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Start
      </Button>
    </Container>
  );
};

export default MainPage;
