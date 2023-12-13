import React, { useState, useEffect } from 'react';

const MostFollowedUsers = () => {
  const [mostFollowedUsers, setMostFollowedUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profilesResponse = await fetch('https://finals-api-4952a1f1f072.herokuapp.com/profiles');
        const profilesData = await profilesResponse.json();

        if (!Array.isArray(profilesData.results)) {
          throw new Error('Err');
        }

        const userEntries = profilesData.results.map((profile) => ({
          id: profile.id,
          username: profile.owner,
          followers: profile.followers_count,
          following: profile.following_count,
          url: `https://coding-nexus-df46516a7083.herokuapp.com/profiles/${profile.id}/`,
          image: profile.image,
        }));

        const mostFollowed = userEntries.slice().sort((a, b) => b.followers - a.followers).slice(0, 5);
        setMostFollowedUsers(mostFollowed);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <p>Most Followed Users</p>
      <ul>
        {mostFollowedUsers.map((user) => (
          <li key={user.id}>
            <img
              src={user.image}
              alt={user.username}
              style={{ width: '25px', height: '25px', borderRadius: '50%' }}
            />{' '}
            <a href={user.url}  rel="noopener noreferrer">
              {user.username} - Followers: {user.followers}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MostFollowedUsers;