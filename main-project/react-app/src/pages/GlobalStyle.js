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
}
a:link { text-decoration: none; }


a:visited { text-decoration: none; }


a:hover { text-decoration: none; }


a:active { text-decoration: none; }

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
    box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.3);
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
    height:50px;
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
    height: 92%;
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
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
    border:0px;
    padding: 2px;
}

.serach-bar{}
    
.post-slot{
    width: 680px;
    height: 50px;
    border: none;
}


.submit-post-btn, .cancel-post-btn{
    margin: 15px 0px 0px 15px;
    float: right;
    width: 70px;
    border: none;
    outline: none;
    height: 35px;
    background: #ececec;
    border-radius: 5px;
    transition: 0.4s;
    cursor: pointer;
}
.submit-post-btn:hover{
    background: rgba(37, 95, 156, 0.937);
    color: #fff;
}
.cancel-post-btn:hover{
    background: red;
    color: #fff;
}

.user-post{
    /* border: 5px solid green; */
    margin-top: 20px;
}
.post-box{
    padding: 25px;
    width: 680px;
    font-size: 18px;
    box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, 0.2);
}
.user-information{
    display: flex;
}
.profilePic img{

    width: 70px;
    height: 70px;
    border-radius: 50%;
}
.username-display{
    margin: 15px 0px 0px 20px;
    font-size: 25px;
    text-transform:bold
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
    border: none;
    transition: 0.1s;
    cursor: pointer;
    color:#6c757d;
}
.post-footer button:hover{
}
.bookmark-btn:hover{
    background-color: #fff2b2;
}
.like-btn:hover{
    background-color: #ffccd5;
}

.like-btn.liked {
  background-color: #ff758f;
  color: white;
  color:#fff;
}
.bookmarked {
  background-color: #ffd400; /* Change background color when bookmarked */
  color:#fff;
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
  margin-bottom: 10px;
  /* border: 1px solid black; */
  /* background-color: lightblue; */
  height: 60px;
  overflow-y: auto; /* Add this line to make the list scrollable */
  box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, 0.1);
  padding:10px;

}
.post-comment{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 680px;
    margin-right:10px;
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
.comment-btn{
    display: flex;
}

.comment-edit-btn {
  
  
  width: 50px;
  /* gap: 10px; Add some space between the buttons */
  cursor: pointer;

  border: none;
    outline: none;
    height: 25px;
    background: #ececec;
    border-radius: 2px;
    transition: 0.4s;
}
.comment-delete-btn {
  
  width: 50px;
  /* gap: 10px; Add some space between the buttons */
  cursor: pointer;
margin-right:20px;
  border: none;
    outline: none;
    height: 25px;
    background: #ececec;
    border-radius: 2px;
    transition: 0.4s;
}

.comment-edit-btn:hover{
    background: rgba(37, 95, 156, 0.937);
    color: #fff;
  }
  .comment-delete-btn:hover{
    background: red;
    color: #fff;
  }


.submit-comment-btn{
    margin-right:20px;
    outline: none;
    border-radius: 2px;
    transition: 0.4s;
}
.delete-post-btn{
    outline: none;
    border-radius: 2px;
    transition: 0.4s;
}
.submit-comment-btn:hover{
    background: rgba(37, 95, 156, 0.937);
    color: #fff;
}
.delete-post-btn:hover{
    background: red;
    color: #fff;
}

.submit-comment-btn, .delete-post-btn{
    margin: 0px 0px 0px 10px;
    width: 70px;    
    height: 35px;
    font-size:12px;
    background: #ececec;
  cursor: pointer;
  border: none;
}

/////////////////////This come form self user part///////////////////////////////



.profile_img {
    display: flex ;
    flex-direction : row ;
}
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
    width: 50px; /* Set a fixed width for the circular profile image */
    height: 50px; /* Maintain a square aspect ratio */
    border: 1px solid;
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
    box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, 0.1);
    border:none;
    padding-left: 10px;
}
.description-edit textarea{
    width: 500px;
    height: 200px;
    margin-top: 20px;
    resize: none;
}
///////////////Register/////////////////////

.wrapper{
    background: #ececec;
    padding: 0 20px 0 20px;
}
.main{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
/*พื้นหลัง */
.wrapper {
    background-image: url('../css/register.css'); 
    background-size: cover;
    background-position: center;
}
.row{
  width:  550px;
  height:650px;
  border-radius: 10px;
  background: #fff;
  padding: 0px;
  box-shadow: 5px 5px 10px 1px rgba(0,0,0,0.2);
}

.text p{
    color: #fff;
    font-size: 20px; 
}
.right{
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.input-box{
  width: 330px;
  box-sizing: border-box;
}

.input-box header{
    font-weight: 700;
    text-align: center;
    margin-bottom: 25px;
    margin-top: 100px;
}
.input-field{
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 0 10px 0 10px;
}
.input{
    height: 45px;
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    outline: none;
    margin-bottom: 20px;
    color: #40414a;
}
.input-box .input-field label{
    position: absolute;
    top: 10px;
    left: 10px;
    pointer-events: none;
    transition: .5s;
}
.input-field input:focus ~ label
   {
    top: -10px;
    font-size: 13px;
  }
  .input-field input:valid ~ label
  {
   top: -10px;
   font-size: 13px;
   color: #5d5076;
 }
 /*เส้นใต้*/
 .input-field .input:focus, .input-field .input:valid{
    border-bottom: 1px solid #743ae1;
 }
 .submit{
    border: none;
    outline: none;
    height: 45px;
    background: #ececec;
    border-radius: 5px;
    transition: .4s;
 }
 .submit:hover{
    background: rgba(37, 95, 156, 0.937);
    color: #fff;
 }
 .signin{
    text-align: center;
    font-size: small;
    margin-top: 25px;
}
.text{
    margin-top: 1px;
    padding-left: 10px;
}
.mini{
    font-size: 13px;
}

.input-date{
    height: 45px;
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    outline: none;
    margin-bottom: 20px;
    color: #40414a;
}
.container-date{
    display: flex;
    justify-content: space-between;
}
span a{
    text-decoration: none;
    font-weight: 700;
    color: #000;

}
/* ขีดเส้นใต้*/
span a:hover{
    text-decoration: underline;
    color: #000;
}



`;

export default GlobalStyle;
