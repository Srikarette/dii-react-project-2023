import React, { useState, useEffect } from 'react';
import axios from 'axios';


function MainContent(user) {
  const [posts, setPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  const [newPostContent, setNewPostContent] = useState('');

  useEffect(() => {
    // Fetch all posts when the component mounts
    axios.get('/api/v1/posts')  // Use the updated backend route
      .then(response => {
        setPosts(response.data.data);  
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);
  
  const handlePostSubmit = () => {
    // Send a POST request to create a new post
    axios.post('/api/v1/posts', { content: newPostContent })  
      .then(response => {
        // Handle success by updating the posts state
        setPosts(prevPosts => [...prevPosts, response.data.data]);
        setNewPostContent(''); // Clear the input field
      })
      .catch(error => {
        console.error('Error creating post:', error);
      });
  };

  const handleLike = async (postId) => {
    try {
      if (likedPosts.includes(postId)) {
        // Unlike the post
        await axios.patch(`/api/v1/posts/${postId}/unlike`);
        setLikedPosts(likedPosts.filter(id => id !== postId));
      } else {
        // Like the post
        await axios.patch(`/api/v1/posts/${postId}/like`);
        setLikedPosts([...likedPosts, postId]);
      }
      // Fetch the updated posts to refresh the like count
      const response = await axios.get('/api/v1/posts');
      setPosts(response.data.data);
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

  const handleDelete = (postId) => {
    axios.delete(`/api/v1/posts/${postId}`)
      .then(() => {
        // Remove the deleted post from the posts array
        setPosts(prevPosts => prevPosts.filter(post => post._id !== postId));
      })
      .catch(error => {
        console.error('Error deleting post:', error);
      });
  };
  
  return (
    <div className="main-content">
      <div className='post-container'>
        <div className='post-menu'>
          <div className='post-box'>
            <input
              type='textarea'
              placeholder='write something'
              className='post-slot'
              value={newPostContent}
              onChange={e => setNewPostContent(e.target.value)}
            />
          </div>
          <div className='post-section'>
            <input
              type='submit'
              className='submit-post-btn'
              value='Post'
              onClick={handlePostSubmit}
            />
            <input
              type='submit'
              className='cancel-post-btn'
              value='Cancel'
            />
          </div>
        </div>

        {/* Render fetched posts */}
        {posts.map(post => (
          <div key={post._id} className='user-post' id={post._id}>
            <div className='post-box'>
              <div className='user-information'>
                <button className='profilePic-btn'>Profile</button>
                <div className='username-display'>
                  <p>{post.formUser}</p>
                </div>
              </div>
              <div className='post-content'>
                <p>{post.content}</p>
              </div>
            </div>
            <div className='post-footer'>
              <button
                className={`like-btn ${likedPosts.includes(post._id) ? 'liked' : ''}`}
                onClick={() => handleLike(post._id)}
                >like
              </button>
              <p>{post.like}</p>
              <button className='bookmark-btn'>save</button>
            </div>
            <div className='comment-section'>
              <input
                type='textarea'
                placeholder='write comment'
                className='comment-slot'
              />
              <input
                type='submit'
                className='submit-comment-btn'
                value={'Comment'}
              />
              <input
                type='submit'
                className='cancel-comment-btn'
                value={'Cancel'}
              />
              <button 
                className='delete-post-btn'
                onClick={() => handleDelete(post._id)}
                >Delete post
              </button>
            </div>
          </div>
        ))}

        {/* End of fetched posts */}
      </div>
    </div>
  );
}

export default MainContent;
