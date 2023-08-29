import React from 'react';
import {Routes, Route } from 'react-router-dom';
import MainContent from './pages/MainContent';
import Container from './pages/Container';
import Header from './pages/Header';
import Navbar from './pages/Navbar';
import EditProfile from './pages/EditProfile';
import PrivacySetting from './pages/privacySetting';
import SelfUser from './pages/selfUserPage'
import GlobalStyle from './pages/GlobalStyle';



function App() {
  const user = { // Replace this with your actual user data
    username: "testuser", // Get the username from your response
  };

  return (
      <div className="mainDisplay">
        <GlobalStyle />
        <Navbar user= {user}/>
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<MainContent user={user} />} />
            <Route path="/home" element={<MainContent user={user} />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/user-profile" element={<SelfUser user={user} />} />
            <Route path="/privacy-setting" element={<PrivacySetting />} />
          </Routes>
        </Container>

     
      </div>
  );
}

export default App;
