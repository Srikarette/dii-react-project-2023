import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "../UserProvider";

function MainContent() {
  // Pass the 'user' prop to access the logged-in user
  const [posts, setPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  const [newPostContent, setNewPostContent] = useState("");
  const [newCommentContent, setNewCommentContent] = useState("");
  const [commentsMap, setCommentsMap] = useState([]);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedCommentContent, setEditedCommentContent] = useState("");
  const [editingPostId, setEditingPostId] = useState(null);
  const [editedPostContent, setEditedPostContent] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const { user } = useUser();

  useEffect(() => {
    axios
      .get("/api/v1/posts")
      .then((response) => {
        setPosts(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  const fetchComments = async () => {
    try {
      const response = await axios.get("/api/v1/comments");
      const commentsMap = response.data.data.reduce((map, comment) => {
        if (!map[comment.postId]) {
          map[comment.postId] = [];
        }
        map[comment.postId].push(comment);
        return map;
      }, {});
      setCommentsMap(commentsMap);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const filteredPosts = posts.filter((post) => {
    const postContent = post.content.toLowerCase();
    return postContent.includes(searchTerm.toLowerCase());
  });

  const handlePostSubmit = () => {
    const userId = user._id;
    console.log(userId);

    axios
      .post("/api/v1/posts", {
        content: newPostContent,
        userId: userId, // Include the user's _id in the request body
      })
      .then((response) => {
        // Handle success by updating the posts state
        setPosts((prevPosts) => [...prevPosts, response.data.data]);
        console.log(response.data.data);
        setNewPostContent(""); // Clear the input field
      })
      .catch((error) => {
        console.error("Error creating post:", error);
      });
  };

  const handleEditPost = (postId) => {
    const post = posts.find((post) => post._id === postId);
    if (post) {
      setEditingPostId(postId);
      setEditedPostContent(post.content);
    }
  };

  const handleSaveEditedPost = async (postId) => {
    try {
      // Send a PATCH request to update the post content
      await axios.patch(`/api/v1/posts/${postId}`, {
        content: editedPostContent,
      });

      // Close the editing mode and fetch the updated posts
      setEditingPostId(null);
      const response = await axios.get("/api/v1/posts");
      setPosts(response.data.data);
    } catch (error) {
      console.error("Error editing post:", error);
    }
  };

  const handleLike = async (postId) => {
    try {
      if (likedPosts.includes(postId)) {
        // Unlike the post
        await axios.patch(`/api/v1/posts/${postId}/unlike`);
        setLikedPosts(likedPosts.filter((id) => id !== postId));
      } else {
        // Like the post
        await axios.patch(`/api/v1/posts/${postId}/like`);
        setLikedPosts([...likedPosts, postId]);
      }
      // Fetch the updated posts to refresh the like count and isBookMark status
      const response = await axios.get("/api/v1/posts");
      setPosts(response.data.data);
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  const handleBookmark = async (postId) => {
    try {
      await axios.patch(`/api/v1/posts/${postId}/bookmark`);

      // Fetch the updated posts to refresh the bookmark status
      const response = await axios.get("/api/v1/posts");
      setPosts(response.data.data);
    } catch (error) {
      console.error("Error toggling bookmark:", error);
    }
  };

  const handleAddComment = async (postId) => {
    try {
      // Send a POST request to add a new comment to the post
      const response = await axios.post(`/api/v1/comments`, {
        postId: postId,
        content: newCommentContent,
      });

      // Update the comments map with the new comment
      const updatedCommentsMap = { ...commentsMap };
      if (!updatedCommentsMap[postId]) {
        updatedCommentsMap[postId] = [];
      }
      updatedCommentsMap[postId].push(response.data.data);
      console.log(response.data.data);
      setCommentsMap(updatedCommentsMap);

      // Clear the input field
      setNewCommentContent("");
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const handleEditComment = (postId, commentId) => {
    // Open the modal for editing
    setEditingCommentId(commentId);

    // Get the current content of the comment
    const comment = commentsMap[postId].find(
      (comment) => comment._id === commentId
    );
    if (comment) {
      setEditedCommentContent(comment.content);
    }
  };

  const handleSaveEditedComment = async (commentId) => {
    try {
      // Send a PATCH request to update the comment content
      await axios.patch(`/api/v1/comments/${commentId}`, {
        content: editedCommentContent,
      });

      // Close the modal and update the comments
      setEditingCommentId(null);
      fetchComments();
    } catch (error) {
      console.error("Error editing comment:", error);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(`/api/v1/comments/${commentId}`);
      fetchComments();
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const handleDelete = (postId) => {
    axios
      .delete(`/api/v1/posts/${postId}`)
      .then(() => {
        setPosts((prevPosts) =>
          prevPosts.filter((post) => post._id !== postId)
        );
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="main-content">
      <div className="post-container">
        {user ? (
          <div className="post-menu">
            <div className="serach-bar">
              <input
                className="serach-slot"
                type="text"
                placeholder="Search for posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="post-box">
              <input
                type="textarea"
                placeholder="write something"
                className="post-slot"
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
              />
            </div>
            <div className="post-section">
              <input
                type="submit"
                className="submit-post-btn"
                value="Post"
                onClick={handlePostSubmit}
              />
              <input type="submit" className="cancel-post-btn" value="Cancel" />
            </div>
          </div>
        ) : null}

        {/* Render fetched posts */}
        {filteredPosts.map((post) => (
          <div key={post._id} className="user-post" id={post._id}>
            <div className="post-box">
              <div className="user-information">
                <button className="profilePic-btn">Profile</button>
                <div className="username-display">
                  {/* Display the username of the user who created the post */}
                  {/* {console.log('userID:', post.userId)}  */}
                  {/* {console.log('Username:', post.userId ? post.userId.username : 'Anonymous')} */}
                  {post.userId ? post.userId.username : "Anonymous"}
                </div>
              </div>
              <div className="post-content">
                {editingPostId === post._id ? (
                  <div>
                    <input
                      type="text"
                      value={editedPostContent}
                      onChange={(e) => setEditedPostContent(e.target.value)}
                    />
                    <button onClick={() => handleSaveEditedPost(post._id)}>
                      Save Post
                    </button>
                  </div>
                ) : (
                  <p>{post.content}</p>
                )}
              </div>
            </div>
            {user ? (
              <>
                <div className="post-footer">
                  <button
                    className={`like-btn ${
                      likedPosts.includes(post._id) ? "liked" : ""
                    }`}
                    onClick={() => handleLike(post._id)}
                  >
                    like
                  </button>
                  <p>{post.like}</p>
                  <button
                    className={`bookmark-btn ${
                      post.isBookMark ? "bookmarked" : ""
                    }`}
                    onClick={() => handleBookmark(post._id)}
                  >
                    {post.isBookMark ? "save" : "save"}
                  </button>
                  {user && user._id === post.formUser?._id && (
                    <button onClick={() => handleEditPost(post._id)}>
                      Edit
                    </button>
                  )}
                </div>
                <div className="comment-section">
                  <div className="comment-list">
                    {commentsMap[post._id] &&
                      commentsMap[post._id].map((comment) => (
                        <div key={comment._id} className="comment">
                          <p>{comment.content}</p>
                          {editingCommentId === comment._id ? (
                            <div>
                              <input
                                type="text"
                                value={editedCommentContent}
                                onChange={(e) =>
                                  setEditedCommentContent(e.target.value)
                                }
                              />
                              <button
                                onClick={() =>
                                  handleSaveEditedComment(comment._id)
                                }
                              >
                                Save
                              </button>
                            </div>
                          ) : (
                            <div className="comment-btn">
                              <button
                                className="comment-delete-btn"
                                onClick={() => handleDeleteComment(comment._id)}
                              >
                                Delete
                              </button>
                              <button
                                className="comment-edit-btn"
                                onClick={() =>
                                  handleEditComment(post._id, comment._id)
                                }
                              >
                                Edit
                              </button>
                            </div>
                          )}
                        </div>
                      ))}
                  </div>

                  <div className="post-comment">
                    <input
                      type="text"
                      placeholder="write comment"
                      value={newCommentContent}
                      onChange={(e) => setNewCommentContent(e.target.value)}
                    />
                    <button
                      className="delete-post-btn"
                      onClick={() => handleDelete(post._id)}
                    >
                      Delete post
                    </button>
                    <button
                      className="submit-comment-btn"
                      onClick={() => handleAddComment(post._id)}
                    >
                      Comment
                    </button>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        ))}
        {/* End of fetched posts */}
      </div>
    </div>
  );
}

export default MainContent;
