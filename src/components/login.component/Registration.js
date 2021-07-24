import React from "react";
import { Link } from "react-router-dom";

function Registration(props) {
    return (
        <>
            <div className="container">
                <div className="form">
                    <form action="#" method="#">
                        <h2 className="title">Welcome to webside!!!</h2>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Username"
                            className="password"
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            className="password"
                        />
                        <input
                            type="password"
                            name="password-again"
                            id="password-again"
                            placeholder="Password again"
                            className="password"
                        />
                        <button type="submit" className="button">
                            Registration
                        </button>
                    </form>
                </div>
                <Link className="login-registration" to="/login">
                    Login
                </Link>
            </div>
        </>
    );
}

export default Registration;
