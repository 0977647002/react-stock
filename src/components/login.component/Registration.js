import React from "react";
import { Link } from "react-router-dom";

function Registration(props) {
  return (
    <>
      <div className="container">
        <div className="form">
          <form action="#" method="#">
            <h2 className="title">Welcome to webside!!!</h2>
            <p>Email:</p>
            <input type="text" name="email" id="email" className="password" />
            <p>Password:</p>
            <input
              type="password"
              name="password"
              id="password"
              className="password"
            />
            <p>Password again:</p>
            <input
              type="password"
              name="password-again"
              id="password-again"
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
