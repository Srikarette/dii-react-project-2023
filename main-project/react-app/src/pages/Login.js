import React from "react";
import './css/login.css'

function Login(){
    return (
      <div class="container main">
        <div class="row">
            <div class="right">
                <div class="input-box">
                    <header>Login account</header>
                    <div class="input-field">
                        <input
                        type="text"
                        class="input"
                        id="email"
                        required=""
                        autocomplete="off"
                        />
                        <label for="email">Email</label>
                    </div>
                    <div class="input-field">
                        <input type="password" class="input" id="pass" required="" />
                        <label for="pass">Password</label>
                    </div>
                    <div class="input-field">
                        <input type="submit" class="submit" value="Login" />
                    </div>
                    <div class="signin">
                        <span
                        >Not a account?
                        <a href="register.html" target="_self"
                            >Create Account</a
                        ></span
                        >
                    </div>
                </div>
            </div>
        </div>
      </div>
  );
}
export default Login;