import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgba(37, 95, 156, 0.937);
  
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}



*{
    margin: 0;
    padding: 0px;
    text-decoration: none;
}

a{
    text-decoration: none;
}

.mainDisplay{
  margin: 0px 0px 0px 0px;
  width: 100%;
  /* height: 100%; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  
  
}

.main-content{
    width: 100%;
    height: 683px;
    margin: 10px 0px 0px 0px;
    background-color:#fff;
    border-radius:10px;
    /* background: bisque; */
    /* border-left: 2px solid black;
    border-right:2px solid black ; */
    /* margin-right: 8%; */
}

.header{
    display: flex;
    flex-wrap: wrap;
    width: 752px;
    flex-direction: row;
    justify-content: space-between;
}

.header button{
    width: 45%;
    height:70px;
    margin: 10px 0px 0px 20px;
    border: none;
    outline: none;
    background: #ececec;
    border-radius: 5px;
    transition: 0.2s;
    cursor: pointer;
}
.header button:hover{
    box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.2);
}

.post-container{
    padding: 22px;
    height: 91%;
    /* width: 94%; */
    /* background-color: aqua; */
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;
}

.post-menu{
    margin: 0px 0px 0px 0px;
}
.serach-slot{
    width: 99.5%;
    height: 35px;
    margin: 0px 0px 25px 0px;
}
.post-slot{
    width: 680px;
    height: 50px;
    border: none;
}

.submit-post-btn, .cancel-post-btn{
    margin: 15px 0px 0px 15px;
    float: right;
    width: 70px;
}

.user-post{
    /* border: 5px solid green; */
    margin-top: 20px;
}
.post-box{
    padding: 25px;
    width: 680px;

    border: 1px solid black;
}
.user-information{
    display: flex;
}
.profilePic-btn{
    background-color: gold;
    width: 80px;
    height: 80px;
    border-radius: 50%;
}
.username-display{
    margin: 10px 0px 0px 30px;
    font-size: 24px;
}
.post-content{
    padding: 25px;
    text-align: justify;
}
/* Start footer section (like button) */
.post-footer{
    margin: 10px 0px 0px 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.post-footer p{
    margin: 0px 20px 0px 0px;
}

.post-footer button{
    margin: 0px 10px 0px 0px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    /* border: none; */
}

.like-btn.liked {
  background-color: pink;
  color: white;
}
.bookmarked {
  background-color: yellow; /* Change background color when bookmarked */
}
.delete-post-btn{
    width:75px;
    background-color: red;
    opacity: 50%;
    color: white;
    border: none;
}
/* Start comment section */
.comment-section{
    margin: 15px 0px 0px 0px;
}
.comment-list {
  margin: 0;
  border: 1px solid black;
  background-color: lightblue;
  height: 200px;
  overflow-y: auto; /* Add this line to make the list scrollable */
}
.post-comment{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 680px;
}
.post-comment input{
    width: 75%;
    height: 35px;
}
.comment {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  padding: 3px; /* Add some padding to each comment for spacing */
}

.comment-edit-btn {
  display: flex;
  gap: 10px; /* Add some space between the buttons */
}

.submit-comment-btn, .delete-post-btn{
    margin: 0px 0px 0px 10px;
    width: 70px;
}

/////////////////////This come form self user part///////////////////////////////

.backgroudprofile {
    width:730px;
    margin-top: 20px;
    border: 1px solid black;
    
    height: 300px;
    /* background-color: aqua; */
    display: flex;
    align-items: center;
    flex-direction: column;
}

.backgroudpro_img {
    width: 100%; /* Set the width to 100% to make the image responsive */
    max-width: 730px; /* Limit the maximum width to 500px */
    height: 300px; /* Maintain the aspect ratio */
 
    display: flex;
    flex-direction: row;
}

.profile {
    width: 30px; /* Set a fixed width for the circular profile image */
    height: 30px; /* Maintain a square aspect ratio */
    border: 1px solid green;
    border-radius: 50%; /* Make the image circular */
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; /* Hide any content that overflows the circular boundary */
}

.profile img {
    width: 100%; /* Ensure the image covers the entire circular container */
    height: 100%; /* Maintain the aspect ratio */
    object-fit: cover; /* Maintain the aspect ratio while covering the container */
}
.content{
    display: flex;
    flex-direction: row;
    width:700px ;
    align-items: center;
    justify-content: flex-start;
    margin-left: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
}
.detail{
    margin-left: 10px;
}
.editprofile{
    margin-left: 400px;
    padding: 10px;
}


.form-container{
    padding: 22px;
    width: 90%;
    height: 85%;
    /* background-color: aqua; */
    display: flex;
    align-items: center;
    flex-direction: column;

}

////Edit profile////
.username-edit{
    /* background-color: blue; */
    margin: 30px 0px 0px 0px;
}

.username-edit  input{
    width: 500px;
    height: 50px;
}
.description-edit textarea{
    width: 500px;
    height: 200px;
    margin-top: 20px;
    resize: none;
}



`;

export default GlobalStyle;
