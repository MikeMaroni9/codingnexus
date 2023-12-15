import React, { useState, useEffect } from 'react';

const MostFollowedUsers = () => {
  // State for storing the most followed users
  const [mostFollowedUsers, setMostFollowedUsers] = useState([]);

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        // Fetch user profiles data from the API
        const profilesResponse = await fetch('https://finals-api-4952a1f1f072.herokuapp.com/profiles');
        const profilesData = await profilesResponse.json();

        // Check if the expected data structure is an array
        if (!Array.isArray(profilesData.results)) {
          throw new Error('Unexpected data structure');
        }

        // Map the raw profiles data to a more usable format
        const userEntries = profilesData.results.map((profile) => ({
          id: profile.id,
          username: profile.owner,
          followers: profile.followers_count,
          following: profile.following_count,
          url: `https://coding-nexus-df46516a7083.herokuapp.com/profiles/${profile.id}/`,
          image: profile.image,
        }));

        // Find the top 5 most followed users based on follower count
        const mostFollowed = userEntries.slice().sort((a, b) => b.followers - a.followers).slice(0, 5);

        // Set the mostFollowedUsers state with the top 5 users
        setMostFollowedUsers(mostFollowed);
      } catch (error) {
        // Log any errors that occur during the fetch and processing
        console.error(error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); 

  return (
    <>
      {}
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