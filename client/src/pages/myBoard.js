import React from "react";
import Container from "../components/container";
import Card from "../components/card";
import API from "../utils/API";
// will require integration of state as well as handleSumbits for adding/saving comments and
// user updates associated with images/board

function myBoard(){
    const [boards, setBoards] = useState([])
    const [formObject, setFormObject] = useState({
    user: "",
    comment: "",
    picture: "",
    budget:"",
    goals:"",
    boardID:"",
    userID:""
  });
  useEffect(() => {
    loadBoards()
  }, []);

  function loadBoards(){
      API.getBoard.then(res=>setBoards(res.data))
  };
  function removeBoard(id){
      API.deleteBoard(id).then(loadBoards)
  };
  
  handleFormSumbit
    return (
        <div>This is the home for each user's saved stuff
        <Container>
            <Card>Card1</Card>
            <Card>Card2</Card>
            <Card>Card3</Card>
            <Card>Card4</Card>
        </Container></div>
    )
}
export default myBoard