import { React, useState } from "react";
// import "./css/login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { loginSuccess, logout } from "./redux/authAction";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch(); // Get the dispatch function from Redux

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Response data:", data);

        const { user } = data;
        const { username, _id: userId } = user;

        console.log("Extracted username:", username);
        console.log("Extracted userId:", userId);

        dispatch(loginSuccess({ username, userId }));
        navigate("/feed");
      } else {
        setErrorMessage("Invalid username or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("An error occurred during login");
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
                <span style={{ color: "red", margin: 20 }}>{errorMessage}</span>
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
                Not an account? <Link to="/register">Create Account</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default styled(Login)`
  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  /*พื้นหลัง */
  /* .wrapper {
    background-image: url('../images//test.png'); 
    background-size: cover;
    background-position: center;
}  */

  .row {
    width: 700px;
    height: 700px;
    border-radius: 10px;
    background: #fff;
    padding: 0px;
    box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.3);
  }

  .text p {
    color: #fff;
    font-size: 20px;
  }
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .input-box {
    width: 330px;
    box-sizing: border-box;
  }

  .input-box header {
    font-weight: 700;
    text-align: center;
    margin-bottom: 25px;
    margin-top: 100px;
  }
  .input-field {
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 0 10px 0 10px;
  }
  .input {
    height: 45px;
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    outline: none;
    margin-bottom: 20px;
    /* color: rgba(37, 95, 156, 0.937); */
  }
  .input-box .input-field label {
    position: absolute;
    top: 10px;
    left: 10px;
    pointer-events: none;
    transition: 0.5s;
  }
  .input-field input:focus ~ label {
    top: -10px;
    font-size: 13px;
  }
  .input-field input:valid ~ label {
    top: -10px;
    font-size: 13px;
    /* color: rgba(37, 95, 156, 0.937); */
  }
  /*เส้นใต้*/
  .input-field .input:focus,
  .input-field .input:valid {
    border-bottom: 1px solid rgba(37, 95, 156, 0.937);
  }
  .submit {
    border: none;
    outline: none;
    height: 45px;
    background: #ececec;
    border-radius: 5px;
    transition: 0.4s;
  }
  .submit:hover {
    background: rgba(37, 95, 156, 0.937);
    color: #fff;
  }
  .signin {
    text-align: center;
    font-size: small;
    margin-top: 25px;
  }

  span a {
    text-decoration: none;
    font-weight: 700;
    color: #000;
  }
  /* ขีดเส้นใต้*/
  span a:hover {
    text-decoration: underline;
    color: #000;
  }
`;
