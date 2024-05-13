// UserProfile.jsx

import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div>
        <strong>Username:</strong> 
      </div>
      <div>
        <strong>Email:</strong> 
      </div>
      {/* Add more user information as needed */}
    </div>
  );
};

export default UserProfile;
