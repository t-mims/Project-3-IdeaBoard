import React, { useState, useEffect } from "react";
import { BoardList, BoardCard } from "../components/boardList";
import API from "../utils/API";
import Container from "../components/container";

function UserBoard(props) {
    const [boards, setBoards] = useState([])

    useEffect(() => {
        loadBoards()
    }, []);

    function loadBoards() {
        API.getBoards()
            .then((res) => setBoards(res.data))
            .then((res)=>console.log(res))
    };
    function handleSubmit(event) {
        event.preventDefault()
        props.history.push("/newBoard");
    }
    return (
        <div>
            <Container>
            <BoardList>
                {boards.map(board => {
                    return (
                        <BoardCard
                            key={board.name}
                            name={board.name}
                            picture={board.picture}
                            comment={board.comment}
                            goals={boards.goals}
                            budget={boards.budget}
                        />
                    );
                })}
            </BoardList>
            <button
                type="submit"
                className="btn btn-primary btn-block"
                onClick={handleSubmit}>
                add new board
            </button>
            </Container>
        </div>
    )
}
export default UserBoard