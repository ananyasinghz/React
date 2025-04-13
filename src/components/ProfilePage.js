import React from 'react';
import ProfileImage from './ProfileImage';
import UserInfo from './UserInfo';
import UserPosts from './UserPosts';

const ProfilePage = () => {
  // Sample user data
  const user = {
    name: "Ananya Singh",
    email: "ananya@gmail.com",
    bio: "Frontend Developer | React Enthusiast | Open Source Contributor",
    imageUrl: "./Images/src-image.png", // you can use your own URL
    posts: [
      { id: 1, title: "My First Post", content: "Learning React is awesome!" },
      { id: 2, title: "State Management", content: "Exploring Redux Toolkit..." },
      { id: 3, title: "Component Lifecycle", content: "Understanding useEffect hook" }
    ]
  };

  return (
    <div className="profile-container" style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '30px',
      backgroundColor: '#fff',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      borderRadius: '12px'
    }}>
      <ProfileImage imageUrl={user.imageUrl} />
      <UserInfo 
        name={user.name}
        email={user.email}
        bio={user.bio}
      />
      <UserPosts posts={user.posts} />
    </div>
  );
};

export default ProfilePage;
