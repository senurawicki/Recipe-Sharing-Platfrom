import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import defaultAvatar from '../assets/avatar.png';
import { Navigate } from 'react-router-dom';

export default function UserProfile() {
  const theme = useTheme();

  const navigateToEditProfile = () => {
    return <Navigate to="./editProfile" />;
  };

  return (
    <Card sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'fit-content', margin: 'auto', marginTop: 10 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent>
          <Typography component="div" variant="h5">
            User Profile
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pb: 1, width: 400, height: 'auto', margin: 'auto' }}>
            <Avatar alt="Default Avatar" src={defaultAvatar} className="avatar" />
          </Box>
          <Typography variant="subtitle1"><strong>Username:</strong> N/A</Typography>
          <Typography variant="subtitle1"><strong>Email:</strong> N/A</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
            <IconButton aria-label="edit" onClick={navigateToEditProfile}> Edit <EditIcon /></IconButton>
            <IconButton aria-label="delete"> Delete <DeleteIcon /></IconButton>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}
