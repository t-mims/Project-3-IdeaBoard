import React from "react";
import Container from "../components/container"


//This is a static page/ may include state in order to greet user by their name but
// definetly not a necessary function
function Home() {
    return (

        <div>This is home for the home page
            <Container>
                <image src=""></image>
                <h1>Welcome!</h1>
                <p>Create an account or login</p>
                <a href="/user/register">Register</a>
                <a href="/user/login"> Login</a>
          </Container>
        </div >
    )
}
export default Home