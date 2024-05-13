import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Container maxWidth="sm">
      <div className="home-page">
        <Typography variant="h3" gutterBottom>
          Welcome to Recipe Sharing Platform
        </Typography>
        <Typography variant="body1" paragraph>
          Discover and share your favorite recipes with the community.
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/recipes">
          Get Started
        </Button>
        {/* Add more content or features as needed */}
      </div>
    </Container>
  );
};

export default HomePage;
