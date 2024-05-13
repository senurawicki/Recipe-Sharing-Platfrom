import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Edit as EditIcon } from '@mui/icons-material';
import defaultAvatar from '../assets/avatar.png';

export default function EditUserProfile() {
  const theme = useTheme();

  // Mock user data
  const user = {
    username: 'John Doe',
    email: 'john@example.com',
  };

  // State for form fields
  const [formData, setFormData] = React.useState({
    username: user.username,
    email: user.email,
  });

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to server to update user information
    console.log(formData);
    // Redirect or show success message after updating user information
  };

  return (
    <Card sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'fit-content', margin: 'auto', marginTop: 10 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent>
          <Typography component="div" variant="h5">
            Edit User Profile
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pb: 1, width: 400, height: 'auto', margin: 'auto' }}>
            <img src={defaultAvatar} alt="Default Avatar" style={{ width: 150, height: 'auto', borderRadius: '50%' }} />
          </Box>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              fullWidth
              margin="normal"
            />
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
              <Button type="submit" variant="contained" color="primary" startIcon={<EditIcon />}>
                Update
              </Button>
            </Box>
          </form>
        </CardContent>
      </Box>
    </Card>
  );
}
