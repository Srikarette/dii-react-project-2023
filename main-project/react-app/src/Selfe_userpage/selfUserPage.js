import './css/selfUser.css';

function selfUser(){
    return (
        <div className="main-content">
        <div className='header'>
          <button>Discovery</button>
          <button>Subscribe</button>
        </div>
        <div className = "backgroudprofile">
            <div className="backgroudpro_img">
            
            </div>

<div className = "content">
    <div className = "profile">
        {/* <img src="/main-project/react-app/src/pages/images/TestProfilePic.png" alt=""> */}
    </div>

<div className="detail">
    <p className = "username"> UserName </p>
    <p className = "userdescript"> Hello World !!!</p></div>

<button className = "editprofile">Edit Profile</button>
</div>
</div>
    

<div className='post-container'>

<div className='example-user-post' id='1'>
          <div className='example-post-box'>
            <div className='user-information'>
              <button className='profilePic-btn'>Profile</button>
              <div className='username-display'>
                <p><a href='.....'>example_username</a></p>
              </div>
            </div>
            <div className='post-content'>
                <p>Lorem Ipsum is simply dummy text of the printing 
                  and typesetting industry. Lorem Ipsum has been the industry's 
                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                  it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                  passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
          </div>
</div>
        </div> 
       </div>
    )
        
}
export default selfUser;