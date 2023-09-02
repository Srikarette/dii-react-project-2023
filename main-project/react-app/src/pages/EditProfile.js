import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import axios from "axios"; 

function EditProfile() {
  const user = useSelector((state) => state.users.user);
  const userId = user ? user.userId : null;
  
  const [newUsername, setNewUsername] = useState("");
  console.log(userId)
  // Event handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(`/api/v1/users/${userId}`, {
        newUsername: newUsername,
      });
      console.log(response)
      if (response.status === 200) {
        alert("Username updated successfully!");
        
      } else {
        console.error("Failed to update username");
      }
    } catch (error) {
      console.error("Error updating username:", error);
    }
  };

  return (
    <div className="main-content">
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <div className='username-edit'>
            <input
              type="text"
              id="new-username"
              name="new-username"
              placeholder='Enter new username'
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />
          </div>
          <button type="submit">SAVE</button>
        </form>
      </div>
    </div>
  );
}

export default styled(EditProfile)`
  .form-container{
      padding: 22px;
      width: 90%;
      height: 85%;
      /* background-color: aqua; */
      display: flex;
      align-items: center;
      flex-direction: column;

  }

  .username-edit{
      background-color: blue;
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
