import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { useUser } from '../UserProvider';
import Image from './images/camt.png';
import ProfileImg from './images/test.png';
function SelfUser(){
  const [posts, setPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  const [newCommentContent, setNewCommentContent] = useState('');
  const [commentsMap, setCommentsMap] = useState({});
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedCommentContent, setEditedCommentContent] = useState('');

  const { user } = useUser();
  console.log('User:', user);

  useEffect(() => {
    axios.get('/api/v1/posts')
      .then(response => {
        setPosts(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  const fetchComments = async () => {
    try {
      const response = await axios.get('/api/v1/comments');
      const commentsMap = response.data.data.reduce((map, comment) => {
        if (!map[comment.postId]) {
          map[comment.postId] = [];
        }
        map[comment.postId].push(comment);
        return map;
      }, {});
      setCommentsMap(commentsMap);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
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
      // Fetch the updated posts to refresh the like count and isBookMark status
      const response = await axios.get('/api/v1/posts');
      setPosts(response.data.data);
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

  const handleBookmark = async (postId) => {
    try {
      await axios.patch(`/api/v1/posts/${postId}/bookmark`);

      // Fetch the updated posts to refresh the bookmark status
      const response = await axios.get('/api/v1/posts');
      setPosts(response.data.data);
    } catch (error) {
      console.error('Error toggling bookmark:', error);
    }
  };

  const handleAddComment = async (postId) => {
    try {
      // Send a POST request to add a new comment to the post
      await axios.post(`/api/v1/comments`, {
        postId: postId,
        content: newCommentContent,
      });
      // Refresh the posts to update the comments
      const response = await axios.get('/api/v1/posts');
      setPosts(response.data.data);
  
      // Update the comments map with a conditional check
      const newCommentsMap = { ...commentsMap };
      if (!newCommentsMap[postId]) {
        newCommentsMap[postId] = [];
      }
      newCommentsMap[postId].push(response.data.data);
      setCommentsMap(newCommentsMap);
  
      setNewCommentContent(''); // Clear the input field
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };
  

  const handleEditComment = (postId, commentId) => {
    // Open the modal for editing
    setEditingCommentId(commentId);

    // Get the current content of the comment
    const comment = commentsMap[postId].find(comment => comment._id === commentId);
    if (comment) {
      setEditedCommentContent(comment.content);
    }
  };

  const handleSaveEditedComment = async (commentId) => {
    try {
      // Send a PATCH request to update the comment content
      await axios.patch(`/api/v1/comments/${commentId}`, { content: editedCommentContent });

      // Close the modal and update the comments
      setEditingCommentId(null);
      fetchComments();
    } catch (error) {
      console.error('Error editing comment:', error);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(`/api/v1/comments/${commentId}`);
      // After successfully deleting the comment, fetch the updated comments
      fetchComments();
    } catch (error) {
      console.error('Error deleting comment:', error);
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

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="main-content">
      <div className='post-container'>
        <div className = "backgroudprofile">
          <div className="backgroudpro_img">
          <img src={Image} alt="Backgroud Image" />
          </div>

          <div className = "content">
            <div className = "profile">
            <img src={ProfileImg} alt="profile Image" />
            </div>

          <div className="detail">
            {console.log(user.username)}
            <p className="username">{user.username}</p>
            <p className = "userdescript"> Hello World !!!</p></div>
            <button className = "editprofile"><Link to='/edit-profile'>Edit Profile</Link></button>
          </div>
        </div>
  
                {/* Render fetched posts */}
                {posts.map(post => (
          <div key={post._id} className='user-post' id={post._id}>
            <div className='post-box'>
              <div className='user-information'>
                <button className='profilePic-btn'>Profile</button>
                <div className='username-display'>
                  {/* Display the username of the user who created the post */}

                  {console.log('Post:', post)}
                  {console.log('formUser:', post.formUser)}
                  {console.log('Username:', post.formUser ? post.formUser.username : 'Anonymous')}
                  
                  <p>{post.formUser ? post.formUser.username : 'Anonymous'}</p>
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
              >
                like
              </button>
              <p>{post.like}</p>
              <button
                className={`bookmark-btn ${post.isBookMark ? 'bookmarked' : ''}`}
                onClick={() => handleBookmark(post._id)}
              >
                {post.isBookMark ? 'save' : 'save'}
              </button>
            </div>
            <div className='comment-section'>
              <div className='comment-list'>
                {commentsMap[post._id] && commentsMap[post._id].map(comment => (
                  <div key={comment._id} className='comment'>
                    <p>{comment.content}</p>
                    {editingCommentId === comment._id ? (
                      <div>
                        <input
                          type='text'
                          value={editedCommentContent}
                          onChange={(e) => setEditedCommentContent(e.target.value)}
                        />
                        <button onClick={() => handleSaveEditedComment(comment._id)}>Save</button>
                      </div>
                    ) : (
                      <div className='comment-edit-btn'>
                        <button onClick={() => handleEditComment(post._id, comment._id)}>Edit</button>
                        <button onClick={() => handleDeleteComment(comment._id)}>Delete</button>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className='post-comment'>
                <input
                  type='text'
                  placeholder='write comment'
                  value={newCommentContent}
                  onChange={e => setNewCommentContent(e.target.value)}
                />
                <button
                  className='submit-comment-btn'
                  onClick={() => handleAddComment(post._id)}
                >
                  Comment
                </button>
                <button
                  className='delete-post-btn'
                  onClick={() => handleDelete(post._id)}
                >
                  Delete post
                </button>
              </div>
            </div>
          </div>
        ))}
        {/* End of fetched posts */}
        </div>
    </div>

  )
};
export default SelfUser;