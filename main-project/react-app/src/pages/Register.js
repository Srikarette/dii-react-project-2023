import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  // Initialize state for username, password, and success message
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch all users when the component mounts
    fetch("/api/v1/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make sure the username and password are not empty
    if (!username || !password) {
      console.error("Username and password are required.");
      return;
    }

    // Check if the username is already in use
    const isUsernameTaken = users.some((user) => user.username === username);

    if (isUsernameTaken) {
      console.error('Username is already in use.');
      setErrorMessage("Username is already in use.");
      return;
    }

    // Proceed with registration
    const newUser = { username, password };
    fetch('/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => {
        if (response.ok) {
          // Registration was successful
          navigate('/login');
        } else {
          console.error('Registration failed');
        }
      })
      .catch((error) => console.error('Error during registration:', error));
  };

  return (
    <div className="container main">
      <div className="row">
        <div className="right">
          <div className="input-box">
            <header>Create account</header>
            {errorMessage && (
              <div className="error-message">
                <span style={{ color: "red" }}>{errorMessage}</span>
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="input-field">
                <input
                  type="text"
                  className="input"
                  id="username"
                  required=""
                  autoComplete="off"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                />
              </div>
              <div className="input-field">
                <input
                  type="password"
                  className="input"
                  id="pass"
                  required=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
              <div className="input-field 3">
                <input type="submit" className="submit" value="Sign Up" />
              </div>
            </form>
            <div className="signin">
              <span>
                Already have an account?{' '}
                <Link to='/login'>Login</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
