import React from 'react';

const MostLikedPosts = ({ mostLikedPosts }) => {
  return (
    <div>
      <p>Most Liked Posts</p>
      <ul>
        {mostLikedPosts.map((entry) => (
          <li key={entry.id}>
            <a href={entry.url} target="_blank" rel="noopener noreferrer">
              {entry.title} - Likes: {entry.likes}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MostLikedPosts;