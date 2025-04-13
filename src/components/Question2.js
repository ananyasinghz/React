import React, { useState } from 'react';
import srcImage from './Images/src-image.png'; // adjust path as needed
import NovellLoginForm from './novellLoginForm';
import ProfilePage from './ProfilePage';

function Question2() {
  const [activeComponent, setActiveComponent] = useState('home');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'novell':
        return <NovellLoginForm />;
      case 'profile':
        return <ProfilePage />;
      default:
        return (
          <div style={{ padding: '30px', textAlign: 'center' }}>
            <h1>Welcome to Question 2</h1>

            <h2>Image from Public Folder</h2>
            <img
              src={`${process.env.PUBLIC_URL}/Images/public-image.png`}
              alt="Public Folder"
              width="300"
              style={{ marginBottom: '20px' }}
            />

            <h2>Image from Src Folder</h2>
            <img
              src={srcImage}
              alt="Src Folder"
              width="300"
              style={{ marginBottom: '40px' }}
            />

            <div style={{ marginTop: '20px' }}>
              <button
                onClick={() => setActiveComponent('novell')}
                style={{ marginRight: '15px', padding: '10px 20px' }}
              >
                Go to Novell Login Form
              </button>

              <button
                onClick={() => setActiveComponent('profile')}
                style={{ padding: '10px 20px' }}
              >
                Go to User Profile
              </button>
            </div>
          </div>
        );
    }
  };

  return <div>{renderComponent()}</div>;
}

export default Question2;
