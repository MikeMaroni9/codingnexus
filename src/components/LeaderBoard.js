import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import MostLikedPosts from './MostLikedPosts';
import MostFollowedUsers from './MostFollowedUsers';


const Leaderboard = () => {

  const [mostLikedPosts, setMostLikedPosts] = useState([]);
  const [mostCommentedPosts, setMostCommentedPosts] = useState([]);
  const [stalkers, setStalkers] = useState([]);


  const fetchData = async () => {
    try {

      const [postsResponse, profilesResponse] = await Promise.all([
        fetch('https://finals-api-4952a1f1f072.herokuapp.com/posts'),
        fetch('https://finals-api-4952a1f1f072.herokuapp.com/profiles'),
      ]);

      const [postsData, profilesData] = await Promise.all([
        postsResponse.json(),
        profilesResponse.json(),
      ]);

      if (!Array.isArray(postsData.results) || !Array.isArray(profilesData.results)) {
        throw new Error('Err');
      }


      const postEntries = postsData.results.map((post) => ({
        id: post.id,
        title: post.title,
        comments: post.comments_count,
        likes: post.likes_count,
        url: `https://coding-nexus-df46516a7083.herokuapp.com/posts/${post.id}/`,
      }));

      const mostCommented = postEntries.slice().sort((a, b) => b.comments - a.comments).slice(0, 5);
      const mostLiked = postEntries.slice().sort((a, b) => b.likes - a.likes).slice(0, 5);

      setMostCommentedPosts(mostCommented);
      setMostLikedPosts(mostLiked);


      const userEntries = profilesData.results.map((profile) => ({
        id: profile.id,
        username: profile.owner,
        followers: profile.followers_count,
        following: profile.following_count,
        url: `https://coding-nexus-df46516a7083.herokuapp.com/profiles/${profile.id}/`,
        image: profile.image,
      }));

      const stalkersData = userEntries.slice().sort((a, b) => b.following - a.following).slice(0, 5);
      setStalkers(stalkersData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="fas fa-crown">Leader Board</h1>

          <p>Most Commented Posts</p>
          <ul>
            {mostCommentedPosts.map((entry) => (
              <li key={entry.id}>
                <a href={entry.url} target="_blank" rel="noopener noreferrer">
                  {entry.title} - Comments: {entry.comments}
                </a>
              </li>
            ))}
          </ul>
          <MostLikedPosts mostLikedPosts={mostLikedPosts} />
          <MostFollowedUsers />
          <p>Stalkers</p>
          <ul>
            {stalkers.map((stalker) => (
              <li key={stalker.id}>
                <img
                  src={stalker.image}
                  alt={stalker.username}
                  style={{ width: '25px', height: '25px', borderRadius: '50%' }}
                />{' '}
                <a href={stalker.url} target="_blank" rel="noopener noreferrer">
                  {stalker.username} - Following: {stalker.following}
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Leaderboard;