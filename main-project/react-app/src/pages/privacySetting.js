import './css/profileEdit.css';


function PrivacySetting() {
  return (
    <div className="main-content">
      <div className='header'>
        <button>Discovery</button>
        <button>Subscribe</button>
      </div>
      
      <div className='form-container'>
        <form>
          <div className='username-edit'>
            <input type="text" id="currentpass" name="cpass" placeholder='Enter new current password'></input>
          </div>
          <div className='username-edit'>
            <input type="text" id="newpass" name="npass" placeholder='Enter new password'></input>
          </div>
          <div className='username-edit'>
            <input type="text" id="passconfirm" name="passconfirm" placeholder='confirm password'></input>
          </div>
        <button type="submit">Create User</button>
          
        </form>
       
      </div>
    </div>
  
  );
}

export default PrivacySetting;
