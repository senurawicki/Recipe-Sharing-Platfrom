import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, TextField, Button, Container, Box } from '@mui/material';

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h5" component="h1" align="center">
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
            required
          />
          <TextField
            margin="normal"
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            required
          />
          <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3 }}>
            Login
          </Button>
        </form>
        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default LoginPage;
