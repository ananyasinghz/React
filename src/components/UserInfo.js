import React from 'react';

const UserInfo = ({ name, email, bio }) => {
  return (
    <div className="user-info" style={{ textAlign: 'center', marginBottom: '30px' }}>
      <h2>{name}</h2>
      <p>📧 {email}</p>
      <p className="bio" style={{ fontStyle: 'italic', color: '#555' }}>{bio}</p>
    </div>
  );
};

export default UserInfo;
