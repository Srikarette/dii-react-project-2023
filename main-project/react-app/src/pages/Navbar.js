import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useUser } from "../UserProvider";
import ProfileImg from './images/woman.png';
function Navbar({ className }) {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const username = user ? user.username : "Guest";

  if (user) {
    // Check if the user object exists.
    console.log("User ID:", user._id);
    console.log("Username:", user.username);
  } else {
    console.log("User is not logged in.");
  }

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <div className={className}>
      {user ? (
        <>
          
          <div className="profileNav">
         
          <img src={ProfileImg}></img>
          
        
          <span className="information">
            <Link to="/user-profile">{username}</Link>
            <div className="hover-text">
              <Link to="/edit-profile">Click to edit profile</Link>
            </div>
          </span>
          </div>
        </>
      ) : null}

      <div className="side-bar">
        <div className="side-bar-content">
          <span className="container2">
            <Link to="/feed">
              <div className="text2" data-text="Home">
                Home
              </div>
            </Link>
          </span>

          {user ? (
            <>
              <span className="container2">
                <Link to="/bookmark">
                  <div className="text2" data-text="Bookmark">
                    Bookmark
                  </div>
                </Link>
              </span>

              <span className="container2">
                <Link to="/privacy-setting">
                  <div className="text2" data-text="Privacy">
                    Privacy
                  </div>
                </Link>
              </span>

              <span className="container2" onClick={handleLogout}>
                <div className="text2" data-text="Log out">
                  Log out
                </div>
              </span>
            </>
          ) : (
            <span className="container2">
              <Link to="/login">
                <div className="text2" data-text="Log in">
                  Log in
                </div>
              </Link>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default styled(Navbar)`
  a:link {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  a:active {
    text-decoration: none;
  }
  * {
    margin: 0;
    padding: 0px;
    font-family: "montserrat", sans-serif;
    text-decoration: none;
  }

  width: 350px;
  height: inherit;
  /* margin: 10px; */
  background: #fff;
  /* margin-left: 5%; */
  box-shadow: 5px 0 5px rgba(0, 0, 0, 0.3);

  .profile {
    padding: 25px;
    position: relative;
    display: inline-block;
    /* border-bottom:2px solid black ; */
    cursor: pointer;
    background: white;
    /* transition: 0.5s ease-out; */
    margin-bottom: 20px;
    margin: 30px;
    z-index: 10;
  }
  .profilePicture {
    width: auto;
    height: auto;
    border-radius: 50%;
    background-color: black;
  }
  .information {
    position: absolute;
    margin: 40px 0px 0px 0px;
    width: auto;
    font-size: 30px;
    /* color: #40916c; */
    color: #000;
    text-decoration: solid;
    z-index: 10;
  }

  .side-bar {
    /* display: flex; */
    flex-wrap: wrap;
    flex-direction: column;
    /* border-top: 2px solid rgba(0, 0, 0, 0.5);  */
    text-decoration: none;
  }
  .side-bar-content p {
    margin-top: 25px;
    margin-left: 40px;
    /* border: 2px solid black; */
    font-size: 25px;
    /* padding: 10px; */
    text-decoration: none;
  }

  .post-btn {
    position: absolute;
    padding: 20px 130px;
    background: #40916c;
    border-radius: 30px;
    color: white;
    border: none;
    font-size: 20px;
    cursor: pointer;
    transition: 0.2s;
    margin-left: 50px;
    margin-top: 4%;
  }
  .post-btn:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    transition: 0.2s ease-in-out;
    background-color: rgba(37, 95, 156, 0.937);
  }
  .post-btn:focus {
    background-color: #dee2e6;
  }

  .hover-text {
    font-size: 15px;
    opacity: 0.2;
    color: rgba(37, 95, 156, 0.937);
    text-decoration: none;
    margin-top: 5px;
  }

  .hover-text:hover {
    opacity: 0.5;
    text-decoration: none;
  }
  .container1 {
    position: relative;
    display: inline-block;
    padding: 0 40px;
    cursor: pointer;
    margin-top: 40px;
  }

  .text1 {
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 900;
    position: relative;
    color: #495057;
  }

  .text1::before {
    content: attr(data-text);
    position: absolute;
    color: #fff;
    width: 0;
    overflow: hidden;
    transition: 0.4s;
  }

  .container1::before {
    content: "";
    width: 0%;
    height: 100%;
    position: absolute;
    background: rgba(37, 95, 156, 0.937);
    right: 0;
    top: 0;
    transition: 0.3s;
    text-decoration: none;
  }

  .container1:hover .text1::before,
  .container1:hover::before {
    width: 100%;
    text-decoration: none;
  }

  .container2 {
    position: relative;
    display: inline-block;
    padding: 0 40px;
    cursor: pointer;
    margin-top: 40px;
    text-decoration: none;
  }

  .text2 {
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 900;
    position: relative;
    color: rgba(37, 95, 156, 0.937);
  }

  .text2::before {
    content: attr(data-text);
    position: absolute;
    color: #fff;
    width: 0;
    overflow: hidden;
    transition: 0.3s;
    text-decoration: none;
  }

  .container2::before {
    content: "";
    width: 0%;
    height: 100%;
    position: absolute;
    background: rgba(37, 95, 156, 0.937);
    right: 0;
    top: 0;
    transition: 0.3s;
    text-decoration: none;
  }

  .container2:hover .text2::before,
  .container2:hover::before {
    width: 100%;
    /* text-decoration: none; */
  }
  .container2:hover {
    box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.3);
  }
`;
