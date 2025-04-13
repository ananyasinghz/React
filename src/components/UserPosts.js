import React from 'react';

const UserPosts = ({ posts }) => {
  return (
    <div className="user-posts" style={{ padding: '0 30px' }}>
      <h3>Latest Posts</h3>
      <div className="posts-list">
        {posts.map(post => (
          <div key={post.id} className="post-card" style={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '15px',
            margin: '10px 0',
            backgroundColor: '#f9f9f9'
          }}>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPosts;
