import "./css/navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="profile">
        <img className="profilePicture" src="" alt=""></img>
        <div className="information">
          <p>Username</p>
          <div class="hover-text">Click to edit profile</div>
        </div>
      </div>

      <div className="side-bar">
        <div className="side-bar-content">
          <span class="container2">
            <div class="text2" data-text="Home">
              Home
            </div>
          </span>

          <span class="container1">
            <div class="text1" data-text="Bookmark">
              Bookmark
            </div>
          </span>

          <span class="container1">
            <div class="text1" data-text="Privacy">
              Privacy
            </div>
          </span>
        </div>

        <div className="side-post-btn">
          <button className="post-btn">Post</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
