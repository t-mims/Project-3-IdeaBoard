import React from "react";
import Container from "../components/container";

//This is a static page/ may include state in order to greet user by their name but
// definetly not a necessary function
function Login() {
    return (
        <div>
  <form action="/login" method="post">
    <div>
      <label>Username:</label>
      <input type="text" name="username" />
    </div>
    <div>
      <label>Password:</label>
      <input type="password" name="password" />
    </div>
    <div>
      <input type="submit" value="Log In" />
    </div>
  </form>
  </div>

    )
}
export default Login;
