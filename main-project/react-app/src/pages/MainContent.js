import './css/content.css';


function MainContent() {
  return (
    <div className="main-content">
      <div className='header'>
        <button>Discovery</button>
        <button>Subscribe</button>
      </div>
      
      <div className='post-container'>
        {/* example-post-box is only example we need to generate it not pre-build */}
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
          <div className='post-footer'>
              <button className='like-btn'>like</button>
              <p>99</p>
              <button className='bookmark-btn'>save</button>
          </div>
          <div className='comment-section'>
              <input type='textarea' placeholder='write comment' className='comment-slot'></input>
              <input type='submit' className='submit-comment-btn' value={'Comment'}></input>
              <input type='submit' className='cancel-comment-btn' value={'Cancel'}></input>
          </div>
        </div>

        {/* another post  */}
        <div className='example-user-post' id='2'>
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
          <div className='post-footer'>
              <button className='like-btn'>like</button>
              <p>99</p>
              <button className='bookmark-btn'>save</button>
          </div>
          <div className='comment-section'>
              <input type='textarea' placeholder='write comment' className='comment-slot'></input>
              <input type='submit' className='submit-comment-btn' value={'Comment'}></input>
              <input type='submit' className='cancel-comment-btn' value={'Cancel'}></input>
          </div>
        </div>
       
       
        {/* end of example */}
      </div>
    </div>
  
  );
}

export default MainContent;
