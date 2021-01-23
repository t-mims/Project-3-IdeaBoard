import React, { useState } from "react";
import Container from "../components/container";
import { Input, Text, BoardButton } from "../components/boardForm";
import API from "../utils/API";

// will require integration of state as well as handleSumbits for adding/saving
function NewBoard(props) {
    const [boards, setBoards] = useState({
        user: "",
        comment: "",
        picture: "",
        budget: "",
        goals: [""]
    });
    function handleInputChange(event) {
        const { name, value } = event.target;
        setBoards({ ...boards, [name]: value })
    };
    // setBoards([...boards, res.data]
    function handleSubmit(event) {
        event.preventDefault();

        API.saveBoard({
            name: boards.name,
            picture: boards.picture,
            budget: boards.budget,
            comment: boards.comment,
            goals: boards.goals
        }).then(window.location.replace("/UserBoard"))

    }

    return (
        <div>
            <Container>
                <h1>"See it, Believe it"</h1>
                <form>
                    <h3>Board Name</h3>
                    <Input
                        onChange={handleInputChange}
                        name="name"
                        placeholder="Give it a name!"
                        value={boards.name}
                    />
                    <h3>Description</h3>
                    <Text
                        onChange={handleInputChange}
                        name="comment"
                        placeholder="What's this board about?"
                        value={boards.comment}
                    />
                    <h3>Inspo Image</h3>
                    <Input
                        onChange={handleInputChange}
                        name="picture"
                        placeholder="Whats the image url/ source?"
                        value={boards.picture}
                    />
                    <h3>Setting Goals</h3>
                    <Text
                        onChange={handleInputChange}
                        name="goals"
                        placeholder="Any goals this inspires you to set"
                        value={boards.goals}
                    />
                    <BoardButton
                        disabled={!(boards.name && boards.comment)}
                        onClick={handleSubmit}
                    >
                        Create new board
                  </BoardButton>
                </form>


            </Container>
        </div>
    )
}
export default NewBoard;