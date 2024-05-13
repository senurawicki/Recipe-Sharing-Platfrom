import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence
import HomeImage from '../assets/home.jpg'; // Import the image properly

const HomePage = () => {
  return (
    <Box
      sx={{
        position: 'relative', // Position relative for absolute positioning of the content
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden', // Hide overflow to prevent blurred content from being visible
      }}
    >
      {/* Background image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1, // Move the background behind the content
          backgroundImage: `url(${HomeImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(5px)', // Blur the background image
        }}
      />

      {/* Content */}
      <Container maxWidth="sm">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: -50 }} // Initial animation values
            animate={{ opacity: 1, y: 0 }} // Animation values when component enters
            exit={{ opacity: 0, y: -50 }} // Animation values when component exits
          >
            <Typography variant="h2" gutterBottom sx={{ color: 'textPrimary', textShadow: '2px 2px 2px #242424' }}>
              Welcome to Recipe Sharing Platform
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }} // Initial animation values
            animate={{ opacity: 1, y: 0 }} // Animation values when component enters
            exit={{ opacity: 0, y: -50 }} // Animation values when component exits
          >
            <Typography variant="h6" paragraph sx={{ color: 'textPrimary', textShadow: '1px 1px 1px #000000' }}>
              Discover and share your favorite recipes with the community.
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }} // Initial animation values
            animate={{ opacity: 1, y: 0 }} // Animation values when component enters
            exit={{ opacity: 0, y: -50 }} // Animation values when component exits
          >
            <Button variant="contained" color="primary" component={Link} to="/recipes">
              Get Started
            </Button>
          </motion.div>
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default HomePage;
