import React from "react";
import Container from "../components/container"
// will require integration of state as well as handleSumbits for that will call Unsplash
// may want to initiate (componentDidMount) with display of random results
//-----------------------------------------
//class Search extends Component{
//state={ search:"",results:[],error:""}
//componentDidMount(){API.getRandomImages()
//.then(res=>this.setState({results:res.data----Plug in ref to random images res}))}
//====Maybe overlay the search bar over the random images in the background??
function Search(){
    return (
        <div>This is for the actual search input text thing 
            <Container></Container>
        </div>
    )
}
export default Search;