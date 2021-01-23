import React, { useState } from "react";
import Container from "../components/container";
import API from "../utils/API";

//This is a static page/ may include state in order to greet user by their name but
// definetly not a necessary function
function Login(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    API.login({ username: username, password: password })
      .then((res) => {
        console.log("login");
        //redirect to Board page
        props.history.push("/UserBoard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="innerdiv">
      
      <Container>
        <h3>Login</h3>
        <form>
          <div>
            <label for="name">Name</label>
            <input
              type="name"
              name="name"
              placeholder="Enter Name"
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div>
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
      </Container>
    </div>
  );
}
export default Login;
