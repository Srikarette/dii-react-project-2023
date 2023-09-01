import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

function PrivacySetting() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      setMessage('New passwords do not match.');
      return;
    }

    try {
      const response = await axios.post('/api/v1/users/update-password', {
        oldPassword,
        newPassword,
      });
      
      if (response.data.status === 'success') {
        setMessage('Password updated successfully.');
      } else {
        setMessage('Password update failed. Please check your old password.');
      }
    } catch (error) {
      console.error('Password update error:', error);
      setMessage('An error occurred while updating your password.');
    }
  };

  return (
    <div className="main-content">
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <div className='username-edit'>
            <input
              type="password"
              id="currentpass"
              name="cpass"
              placeholder='Enter old password'
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <div className='username-edit'>
            <input
              type="password"
              id="newpass"
              name="npass"
              placeholder='Enter new password'
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className='username-edit'>
            <input
              type="password"
              id="passconfirm"
              name="passconfirm"
              placeholder='Confirm new password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit">SAVE PASSWORD</button>
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
}
export default styled(PrivacySetting)`
.form-container {
  padding: 22px;
  width: 90%;
  height: 85%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.username-edit {
  background-color: blue;
  margin: 30px 0px 0px 0px;
}

.username-edit input {
  width: 500px;
  height: 50px;
}

.description-edit textarea {
  width: 500px;
  height: 200px;
  margin-top: 20px;
  resize: none;
}
`;
