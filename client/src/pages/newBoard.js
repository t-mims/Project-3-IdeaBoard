import React,{useState} from "react";
import Container from "../components/container";
import {Input,Text,BoardButton} from "../components/boardForm";
import API from "../utils/API";

// will require integration of state as well as handleSumbits for adding/saving
function NewBoard() {
    const [boards, setBoards] = useState({
    user: "",
    comment: "",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD9QWUKeyHuBDkW0np6RBpVQEe8EV_e8J1uQ&usqp=CAU",
    budget:"",
    goals:[""]
  });

    function handleFormSubmit(event) {
        event.preventDefault();
        if (boards.user && boards.comment) {
            API.saveBoard({
                name: boards.name,
                picture: boards.picture,
                budget: boards.budget,
                comment: boards.comment,
                goals: boards.goals
            }).then( window.location.replace("/myBoard"));

                
        }
    }

    return (
        <div>
            <Container>
                <h1>"See it, Believe it"</h1>
                <form>
                    <Input
                        name="name"
                        placeholder="Board name"
                        value={boards.name}
                    />
                    <Text
                        name="comment"
                        placeholder="Comment/Description"
                        value={boards.comment}
                    />
                    <Text
                        name="picture"
                        placeholder="image url/ source"
                        value={boards.picture}
                    />
                    <BoardButton
                        disabled={!(boards.user && boards.comment)}
                        onClick={handleFormSubmit}
                    >
                        Submit new board!
                  </BoardButton>
                </form>


            </Container>
        </div>
    )
}
export default NewBoard;