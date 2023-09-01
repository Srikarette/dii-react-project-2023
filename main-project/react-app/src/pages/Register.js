import React from "react";
import './css/register.css';

function Register(){
    return (
        <div class="container main">
            <div class="row">
                <div class="right">
                    <div class="input-box">
                    <header>Create account</header>
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
                    <div>
                        <p class="text">Date of birth</p>
                        <p class="text mini">
                        User mustbe at lest 18 year old to getting an account also if
                        account is for a business, a pet or something else.
                        </p>
                    </div>
                    <dive class="container-date">
                        <div class="input-field date">
                        <input
                            type="text"
                            class="input-date"
                            id="date"
                            required=""
                            autocomplete="off"
                        />
                        <label for="email">Date</label>
                        </div>
                        <div class="input-field date">
                        <input
                            type="text"
                            class="input-date"
                            id="month"
                            required=""
                            autocomplete="off"
                        />
                        <label for="email">Month</label>
                        </div>
                        <div class="input-field date">
                        <input
                            type="text"
                            class="input-date"
                            id="year"
                            required=""
                            autocomplete="off"
                        />
                        <label for="email">Year</label>
                        </div>
                    </dive>

                    <div class="input-field 3">
                        <input type="submit" class="submit" value="Sign Up" />
                    </div>

                    <div class="signin">
                        <span
                        >Already have an account?
                        <a href="login.html" target="_self">Log in here</a></span
                        >
                    </div>
                    </div>
                </div>
            </div>
      </div>
    );
};

export default Register;
