import React, { useState } from "react";
import Container from "../components/container";
import API from "../utils/API";
import {Link} from "react-router-dom"

//This is a static page/ may include state in order to greet user by their name but
// definetly not a necessary function
function Register(props){
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    API.register({username: username, password: password, email: email})
    .then (res => {
      console.log("user created");
      props.history.push("/UserBoard");
    })
    .catch (error => {
       console.log(error); 
    })
  }
    return (
   
        <div>This is home for the home page
        <Container>
         <h1>Register</h1>
          <form>
          <div>
              <label for="name">Name  </label>
              <input
                type="name"
                name="name"
                placeholder=  "Enter Name"
                onChange={event => setUsername(event.target.value)}
              />
            
          </div>
          <div>
              <label for="email">Email  </label>
              <input
                type="email"
                name="email"
                placeholder=  "Enter Email"
                onChange={event => setEmail(event.target.value)}
              />
            </div>
            <div >
              <label for="password">Password  </label>
              <input
                type="password"
                name="password"
                placeholder=  "Create Password"
                onChange={event => setPassword(event.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block"
            onClick={handleSubmit}>
              
              Register
            </button>
          </form>
          <p >Have An Account? <Link to="/login">Login</Link></p>
          </Container>
        </div>
    )
}
export default Register
