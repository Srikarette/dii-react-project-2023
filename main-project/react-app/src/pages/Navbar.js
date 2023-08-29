// import "./css/navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

function Navbar({className, user}) {
  return (
    <div className={className}>
      <div className="profile">
        <div className="information">
          <Link to='user-profile'>{user.username}</Link>
          <div className="hover-text">
            <Link to='edit-profile'>Click to edit profile</Link>
          </div>
        </div>
      </div>

      <div className="side-bar">
        <div className="side-bar-content">
          <span class="container2">
          <Link to='/home'>
            <div class="text2" data-text="Home">
              Home
            </div>
          </Link>
          </span>

          <span class="container1">
            <div class="text1" data-text="Bookmark">
              Bookmark
            </div>
          </span>

          <span class="container1">
          <Link to='/privacy-setting'>
            <div class="text1" data-text="Privacy">
             Privacy
            </div>
          </Link>  
          </span>
        </div>

        <div className="side-post-btn">
        <Link to='/home'>
          <button className="post-btn">Post</button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default styled(Navbar)`
*{
    margin: 0;
    padding: 0px;
    font-family: "montserrat",sans-serif;
}

width: 400px;
height:inherit ;
/* margin: 10px; */
/* background: #52b788; */
margin-left: 10%;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

.profile{
    padding: 25px;

    display: flex;
    /* border-bottom:2px solid black ; */
    cursor: pointer;
    background: white;
    transition:0.5s ease-out;
    margin-bottom: 20px;
    margin: 30px;
    z-index: 10;
    
}
.profilePicture{
    width: auto;
    height: auto;
    border-radius: 50%;
    background-color: black;
    
}
.information{
    position: absolute;
    margin: 10px 0px 0px 20%;
    font-size: 30px;
    /* color: #40916c; */
    color: #000;
    text-decoration: solid;
    z-index: 10;
}

.side-bar{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    /* border-top: 2px solid rgba(0, 0, 0, 0.5);  */
    
}
.side-bar-content p{
    margin-top: 25px;
    margin-left: 40px;
    /* border: 2px solid black; */
    font-size: 25px;
    /* padding: 10px; */
}

.post-btn{
    position:absolute;
    padding: 20px 130px;
    background: #40916c;
    border-radius: 30px;
    color: white;
    border: none;
    font-size: 20px;
    cursor: pointer;
    transition:0.2s;
    margin-left: 50px;
    margin-top:4% ;
}
.post-btn:hover{
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    transition:0.2s ease-in-out;
    background-color: #52b788;

}
.post-btn:focus{
    background-color: #dee2e6;

}


.hover-text {
    margin-top: 10px;
    font-size: 15px;
    opacity: 0.5;
    transition: opacity 0.2s;
    transition: transform 0.3s;
    transition:0.2s ease-in-out;
    color: #6c757d;
}
.profile:hover{
    transition: box-shadow 0.2s;
}

.profile:hover .hover-text {
    opacity: 1;
    color: #40916c;
}



.container1
{
  position: relative;
  display: inline-block;
  padding: 0 40px;
  cursor: pointer;
  margin-top: 40px;
}

.text1
{
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 900;
  position: relative;
  color: #495057; 
}

.text1::before
{
  content: attr(data-text);
  position: absolute;
  color: #fff;
  width: 0;
  overflow: hidden;
  transition: 0.4s;
}

.container1::before
{
  content: "";
  width: 0%;
  height: 100%;
  position: absolute;
  background: #40916c;
  right: 0;
  top: 0;
  transition: 0.4s;
}

.container1:hover .text1::before,.container1:hover::before
{
  width: 100%;
}

.container2
{
  position: relative;
  display: inline-block;
  padding: 0 40px;
  cursor: pointer;
  margin-top: 40px;
}

.text2
{
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 900;
  position: relative;
  color: #40916c; 
}

.text2::before
{
  content: attr(data-text);
  position: absolute;
  color: #fff;
  width: 0;
  overflow: hidden;
  transition: 0.4s;
}

.container2::before
{
  content: "";
  width: 0%;
  height: 100%;
  position: absolute;
  background: #40916c;
  right: 0;
  top: 0;
  transition: 0.4s;
}

.container2:hover .text2::before,.container2:hover::before
{
  width: 100%;
}
`;
