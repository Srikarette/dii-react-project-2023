import React, { useState } from "react";
import './css/login.css'
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Rename history to navigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/v1/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Login was successful, you can redirect to the home page
        console.log('Login success!')
        navigate('/home'); // Use navigate to change the route
      } else {
        // Login failed, handle the error (e.g., display an error message)
        setErrorMessage('Invalid username or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('An error occurred during login');
    }
  };

  return (
    <div className="container main">
      <div className="row">
        <div className="right">
          <div className="input-box">
            <header>Login account</header>
            {errorMessage && (
              <div className="error-message">
                <span style={{ color: 'red' }}>{errorMessage}</span>
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
                />
                <label htmlFor="email">Username</label>
              </div>
              <div className="input-field">
                <input
                  type="password"
                  className="input"
                  id="pass"
                  required=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="pass">Password</label>
              </div>
              <div className="input-field">
                <input type="submit" className="submit" value="Login" />
              </div>
            </form>
            <div className="signin">
              <span>
                Not an account?{' '}
                <Link to='/register'>Create Account</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
