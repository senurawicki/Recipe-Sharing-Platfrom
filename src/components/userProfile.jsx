import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import defaultAvatar from '../assets/avatar.png';
// import '../styles/userProfile.css';

export default function UserProfile() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', alignItems: 'center', width: 'fit-content' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent>
          <Typography component="div" variant="h5">
            User Profile
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            pb: 10, 
            width:400, 
            height:'auto',
            margin: 'auto',
          }}>

            <Avatar alt="Default Avatar" src={defaultAvatar} className="avatar" />
          </Box>
          <Typography variant="subtitle1"><strong>Username:</strong> N/A</Typography>
          <Typography variant="subtitle1"><strong>Email:</strong> N/A</Typography>
          {/* Add more user information as needed */}
        </CardContent>
      </Box>
    </Card>
  );
}
