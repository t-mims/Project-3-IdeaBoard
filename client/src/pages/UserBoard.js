import React, { useState, useEffect } from "react";
import {BoardList,BoardCard} from "../components/boardList";
import API from "../utils/API";

function UserBoard() {
    const [boards, setBoards] = useState([])

    
    useEffect(() => {
        loadBoards()
    }, []);

    function loadBoards() {
        API.getBoards().then(res => setBoards(res.data))
    };
    function handleSubmit(event) {
        event.preventDefault()
        window.location.replace("/myBoard");

    }
    return (
        <div>
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
        </div>
    )
}
export default UserBoard