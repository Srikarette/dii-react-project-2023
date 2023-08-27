import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/content.css';


function MainContent() {
  const [posts, setPosts] = useState([]);
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

  return (
    <div className="main-content">
      <div className='header'>
        <button>Discovery</button>
        <button>Subscribe</button>
      </div>

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
              <button className='like-btn'>like</button>
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
            </div>
          </div>
        ))}

        {/* End of fetched posts */}
      </div>
    </div>
  );
}

export default MainContent;
