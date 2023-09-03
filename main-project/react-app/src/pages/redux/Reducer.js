import {
    FETCH_POSTS_SUCCESS,
    ADD_POST_SUCCESS,
    EDIT_POST_SUCCESS,
    DELETE_POST_SUCCESS,
    LIKE_POST_SUCCESS,
    UNLIKE_POST_SUCCESS,
    ADD_COMMENT_SUCCESS,
    EDIT_COMMENT_SUCCESS,
    DELETE_COMMENT_SUCCESS,
  } from './Actions';
  
  const initialState = {
    posts: [],
    likedPosts: [],
    commentsMap: {},
  };
  
  const postReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_POSTS_SUCCESS:
        return {
          ...state,
          posts: action.payload,
        };
      case ADD_POST_SUCCESS:
        return {
          ...state,
          posts: [...state.posts, action.payload],
        };
      case EDIT_POST_SUCCESS:
        return {
          ...state,
          posts: state.posts.map((post) =>
            post._id === action.payload._id ? { ...post, content: action.payload.content } : post
          ),
        };
      case DELETE_POST_SUCCESS:
        return {
          ...state,
          posts: state.posts.filter((post) => post._id !== action.payload),
        };
      case LIKE_POST_SUCCESS:
        return {
          ...state,
          likedPosts: [...state.likedPosts, action.payload],
        };
      case UNLIKE_POST_SUCCESS:
        return {
          ...state,
          likedPosts: state.likedPosts.filter((postId) => postId !== action.payload),
        };
      case ADD_COMMENT_SUCCESS:
      case EDIT_COMMENT_SUCCESS:
      case DELETE_COMMENT_SUCCESS:
        return {
          ...state,
          commentsMap: {
            ...state.commentsMap,
            [action.payload.postId]: action.payload.comments,
          },
        };
      default:
        return state;
    }
  };
  
  export default postReducer;
  