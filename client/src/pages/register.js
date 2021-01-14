import React from "react";

//This is a static page/ may include state in order to greet user by their name but
// definetly not a necessary function
function Register(){
     return (
   <div></div>
        <h1>Register</h1>
        <form action="/user/register" method="POST">
        <div>
            <label for="name">Name</label>
            <input
              type="name"
              name="name"
              placeholder="Enter Name"
              value="<%= typeof name != 'undefined' ? name : '' %>"
            />
          
        </div>
        <div>
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value="%= typeof email != 'undefined' ? email : '' %>"
            />
          </div>
          <div >
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create Password"
              value="<%= typeof password != 'undefined' ? password : '' %>"
            />
          </div>
          <div >
            <label for="password2">Confirm Password</label>
            <input
              type="password"
              name="password2"
              placeholder="Confirm Password"
              value="<%= typeof password2 != 'undefined' ? password2 : '' %>"
            />
          </div>
          <button type="submit" class="btn btn-primary btn-block">
            Register
          </button>
        </form>
        <p >Have An Account? <a href="/users/login">Login</a></p>
    )
}
export default Register