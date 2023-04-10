import React from "react";
import "./UserLogin.scss"

class UserLogin extends React.Component {
  render() {
    return (
      <div className='user-login-container'>
        <div className="container">
          <h3>User Login</h3>
          <div className="form">
            <form action="#" className="login-form">
              <input type="text" name="userName" placeholder="Username"></input>
              <input type="text" name="password" placeholder="Password"></input>
              <button type="submit" className="btn">Login</button>
              <p className="message">Already registered?<a href="#"> Sign in</a></p>
          </form>
          </div>
        </div>
      </div>
    )
  }
}

export default UserLogin;
