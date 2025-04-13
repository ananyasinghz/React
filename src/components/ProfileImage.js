import React from 'react';

const ProfileImage = ({ imageUrl }) => {
  return (
    <div className="profile-image" style={{ textAlign: 'center', marginBottom: '20px' }}>
      <img 
        src={imageUrl} 
        alt="Profile" 
        className="rounded-image"
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          objectFit: 'cover',
          border: '3px solid #333'
        }}
      />
    </div>
  );
};

export default ProfileImage;
