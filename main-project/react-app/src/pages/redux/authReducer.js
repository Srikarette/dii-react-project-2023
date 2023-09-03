import { LOGIN_SUCCESS, LOGOUT } from "./authAction";

const initialState = {
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};

export default authReducer;
