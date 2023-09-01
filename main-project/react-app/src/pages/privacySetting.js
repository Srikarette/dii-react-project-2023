import './css/profileEdit.css';
import styled from 'styled-components';


function PrivacySetting() {
  return (
    <div className="main-content">
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
        <button type="submit">SAVE PASSWORD</button>
          
        </form>
       
      </div>
    </div>
  
  );
}

export default styled(PrivacySetting)`

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
