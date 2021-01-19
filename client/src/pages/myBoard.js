import React, { useEffect, useState } from "react";
import Container from "../components/container";
import Card from "../components/card";
import API from "../utils/API";
import { Input, Text, FormButton } from "../components/form";

// will require integration of state as well as handleSumbits for adding/saving comments and
// user updates associated with images/board


function MyBoard(){
    const [boards, setBoards] = useState([])
    const [formObject, setFormObject] = useState({
    user: "Joe",
    comment: "enter comment",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD9QWUKeyHuBDkW0np6RBpVQEe8EV_e8J1uQ&usqp=CAU",
    budget:"0",
    goals:["thing 1", "thing 2", "red fish", "blue fish"]
  });
  useEffect(() => {
    loadBoards()
  }, []);

  function loadBoards(){
      API.getBoard().then(res=>setBoards(res.data))
  };
  function removeBoard(id){
      API.deleteBoard(id).then(loadBoards)
  };
  
  function handleFormSubmit(event){
      event.preventDefault();
      if (formObject.user && formObject.comment) {
        API.saveBoard({
          user: formObject.user,
          picture:formObject.picture,
          budget:formObject.budget,
          comment:formObject.comment,
          goals:formObject.goals
        })
          .then(() => setFormObject({
           name: "",
           picture: "",
           budget: "",
           comment:"",
           goals:""
          }))
          .then(() => loadBoards())
      }
  }
    return (
        <div>This is the home for each user's saved stuff
        <Container>
        <form>
              <Input
                name="name"
                placeholder="Board name"
                value={formObject.name}
              />
              <Text
                name="comment"
                placeholder="Comment/Description"
                value={formObject.comment}
              />
              <Text
                name="picture"
                placeholder="image url/ source"
              value={formObject.picture}
            />
              <FormButton
                disabled={!(formObject.user && formObject.comment)}
                onClick= {handleFormSubmit}
              >
                Submit new board!
              </FormButton>
            </form>
            {/* WILL PROB MOVE elements above or below to sep page; 
            above would be moved to a card element most likely */}

            <Card>boards{boards}</Card>
            <Card>Card2</Card>
            <Card>Card3</Card>
            <Card>Card4</Card>
        </Container></div>
    )
}
export default MyBoard