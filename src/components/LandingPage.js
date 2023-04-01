
import React, { useState } from 'react';
import DragAndDropArea from './DragAndDropArea';
import PDFViewer from './PDFViewer';
import { getResumeSuggestions } from '../services/aiService';
import { Container, Typography, Box, Paper } from '@mui/material';
import './LandingPage.css';

const LandingPage = ({ onFileDrop, loading, setLoading, fileContent, error, fileType }) => {
  const [suggestions, setSuggestions] = useState([]);

  const handleFileDrop = async (acceptedFiles) => {
    onFileDrop(acceptedFiles);
    if (acceptedFiles.length > 0) {
      try {
        setLoading(true);
        const suggestions = await getResumeSuggestions(acceptedFiles[0]);
        setSuggestions(suggestions);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.error('Error getting suggestions:', err);
      }
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Upload your resume
      </Typography>
      <DragAndDropArea
        onDrop={handleFileDrop}
        loading={loading}
        setLoading={setLoading}
        accept=".txt,.pdf,.docx,.md"
        maxSize={2000000}
      />
      {error && (
        <Box mt={2}>
          <Typography color="error">{error}</Typography>
        </Box>
      )}
      {fileContent ? (
        <Box mt={2}>
          <Paper elevation={2} className="file-content">
            {fileType === 'application/pdf' ? (
              <PDFViewer file={fileContent} />
            ) : (
              <pre>{fileContent}</pre>
            )}
          </Paper>
        </Box>
      ) : (
        <Box mt={2}>
          <Typography>No file uploaded</Typography>
        </Box>
      )}
      {suggestions.length > 0 && (
        <Box mt={2}>
          <Typography variant="h5" gutterBottom>
            Suggestions:
          </Typography>
          <ul>
            {suggestions.map((suggestion, index) => (
              <li key={index}>
                Line {suggestion.line}: {suggestion.message}
              </li>
            ))}
          </ul>
        </Box>
      )}
    </Container>
  );
};

export default LandingPage;
