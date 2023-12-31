import styled from "styled-components";

function EditProfile(className) {
  return (
    <div className="main-content">
      <div className="form-container">
        <form>
          <div className="username-edit">
            {/* <label for="username">Username:</label> */}
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter new username"
            ></input>
          </div>

          <button type="submit">SAVE</button>
        </form>
      </div>
    </div>
  );
}

export default styled(EditProfile)`
  .form-container {
    padding: 22px;
    width: 90%;
    height: 85%;
    /* background-color: aqua; */
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
