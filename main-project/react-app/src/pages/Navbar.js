import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./redux/authAction";
import ProfileImg from "./images/woman.png";
import logo from "./images/test.png";
import home from "./images/homeie.png";
import bookmark from "./images/bookmark.png";
import pvc from "./images/locked.png";
import logou from "./images/export.png";
import logii from "./images/user.png";
function Navbar({ className }) {
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const username = user ? user.username : "Guest";

  console.log(username);

  const handleLogout = () => {
    // Dispatch an action to log the user out
    dispatch(logout());
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
                <img className="logo_home" src={home}></img>
                Home
              </div>
            </Link>
          </span>

          {user ? (
            <>
              <span className="container2">
                <Link to="/bookmark">
                  <div className="text2" data-text="Bookmark">
                    <img className="logo_bookmark" src={bookmark}></img>
                    Bookmark
                  </div>
                </Link>
              </span>

              <span className="container2">
                <Link to="/privacy-setting">
                  <div className="text2" data-text="Privacy">
                    <img className="logo_pvc" src={pvc}></img>
                    Privacy
                  </div>
                </Link>
              </span>

              <span className="container2" onClick={handleLogout}>
                <div className="text2" data-text="Logout">
                  <img className="logo_logout" src={logou}></img>
                  Logout
                </div>
              </span>
            </>
          ) : (
            <span className="container2">
              <Link to="/login">
                <div className="text2" data-text="Login">
                  <img className="logo_login" src={logii}></img>
                  Login
                </div>
              </Link>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  className: PropTypes.string.isRequired
};

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
    margin: 20px 0px 0px 0px;
    width: auto;
    font-size: 30px;
    /* color: #40916c; */
    color: #000;
    text-decoration: solid;
    z-index: 10;
  }

  .profile_img img {
    width: 100px;
    height: 100px;
  }
  .profileNav img {
    width: 100px;
    height: 100px;
    margin-right: 20px;
  }
  .profileNav {
    margin-top: 20px;
    margin-left: 30px;
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
  .logo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-left: 6%;
    margin-top: 32%;
    position: absolute;
  }
  .logo_home {
    width: 45px;
    height: 45px;
    position: absolute;
    padding: 2px;
    margin-left: 250px;
    transition: all 0.2s;
    border-radius: 50%;
  }
  .logo_home:hover {
    box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.3);
  }
  .logo_bookmark {
    width: 45px;
    height: 45px;
    position: absolute;
    padding: 2px;
    margin-left: 250px;
    transition: all 0.2s;
    border-radius: 50%;
  }
  .logo_bookmark:hover {
    box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.3);
  }
  .logo_pvc {
    width: 45px;
    height: 45px;
    position: absolute;
    margin-left: 250px;
    transition: all 0.2s;
    padding: 1px;
    border-radius: 70%;
  }
  .logo_pvc:hover {
    box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.3);
  }
  .logo_pvc {
    width: 45px;
    height: 45px;
    position: absolute;
    margin-left: 250px;
    transition: all 0.2s;
    border-radius: 70%;
  }
  .logo_pvc:hover {
    box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.3);
  }
  .logo_logout {
    width: 45px;
    height: 45px;
    padding: 1px;
    position: absolute;
    margin-left: 250px;
    transition: all 0.2s;
    border-radius: 70%;
  }
  .logo_logout:hover {
    box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.3);
  }
  .logo_login {
    width: 45px;
    height: 45px;
    padding: 1px;
    position: absolute;
    margin-left: 250px;
    transition: all 0.2s;
    border-radius: 70%;
  }
  .logo_login:hover {
    box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.3);
  }
`;
