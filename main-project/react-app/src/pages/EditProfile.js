import './css/profileEdit.css';


function EditProfile() {
  return (
    <div className="main-content">
      <div className='header'>
        <button>Discovery</button>
        <button>Subscribe</button>
      </div>
      
      <div className='form-container'>
        <form>
          <div className='username-edit'>
            {/* <label for="username">Username:</label> */}
            <input type="text" id="username" name="username" placeholder='Enter new username'></input>
          </div>
          <div className='description-edit'>
            {/* <label for="description">Description:</label> */}
            <textarea id="description" name="description" rows="4" ></textarea>
          </div>
        <button type="submit">Create User</button>
          
        </form>
       
      </div>
    </div>
  
  );
}

export default EditProfile;
