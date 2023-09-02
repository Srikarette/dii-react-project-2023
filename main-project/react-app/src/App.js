import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import MainContent from "./pages/MainContent";
import Container from "./pages/Container";
import Header from "./pages/Header";
import Navbar from "./pages/Navbar";
import EditProfile from "./pages/EditProfile";
import PrivacySetting from "./pages/privacySetting";
import SelfUser from "./pages/selfUserPage";
import GlobalStyle from "./pages/GlobalStyle";
import Bookmark from "./pages/BookmarkPage";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const user = {
    // Replace this with your actual user data
    username: "testuser", // Get the username from your response
  };
  const [post, setPosts] = useState([]);

  useEffect(() => {
    // Fetch all posts when the component mounts
    axios
      .get("/api/v1/posts")
      .then((response) => {
        setPosts(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <div className="mainDisplay">
      <GlobalStyle />
      <Navbar />
      <Container>
        <Header />

        {post.length > 0 ? (
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/feed" element={<MainContent />} />
            <Route path="/bookmark" element={<Bookmark posts={post} />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/user-profile" element={<SelfUser user={user} />} />
            <Route path="/privacy-setting" element={<PrivacySetting />} />
          </Routes>
        ) : (
          <div>loading post...</div>
        )}
      </Container>
    </div>
  );
}

export default App;
