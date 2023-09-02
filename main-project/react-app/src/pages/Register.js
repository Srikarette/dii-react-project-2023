import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  // Initialize state for username, password, and success message
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make sure the username and password are not empty
      if (!username || !password) {
        console.error("Username and password are required.");
        return;
      }

      const response = await fetch("/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Registration was successful
        setSuccessMessage("Registration successful");
        navigate("/login");
      } else {
        // Registration failed, handle the error (e.g., display an error message)
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="container main">
      <div className="row">
        <div className="right">
          <div className="input-box">
            <header>Create account</header>
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
            {successMessage && (
              <div className="success-message">
                <span style={{ color: "green" }}>{successMessage}</span>
              </div>
            )}
            <div className="signin">
              <span>
                Already have an account? <Link to="/login">Login</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default styled(Register)``;
