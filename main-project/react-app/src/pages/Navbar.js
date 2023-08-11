import './css/navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className='profile'>
        <button className='profilePicture'><img src='.....' alt='profilePic'></img>profile</button>
          <div className='information'>
            <p>Username</p>
            <a href='....'>Edit profile</a>
          </div>
      </div>
      <div className='side-bar'>
        <div className='side-bar-content'>
          <h3><a href='....'>Home</a></h3>
          
          <h3><a href='....'>Bookmark</a></h3>

          <h3><a href='....'>Privacy setting</a></h3>
        </div>
        <div className='side-post-btn'>
          <button className='post-btn'>Post</button>
        </div>
      </div>
      
    </div>
  );
}

export default Navbar;
