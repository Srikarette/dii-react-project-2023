// Action types
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT"; // Define a new action type for logout

// Action creators
export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData,
});

// Create an action creator for logout
export const logout = () => ({
  type: LOGOUT,
});
