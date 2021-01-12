import React, {Component} from "react";
import API from "../../utils/API"
import Results from "../results";
import SearchForm from "../searchForm"


class SearchBar extends Component{
state = {
    search: "",
    results: []
  };

  componentDidMount(){
    this.randomImg();
  }

  randomImg=()=>{
     API.getRandomImages().
     then(res => this.setState({ results: res.data.data })).
     catch(err => console.log(err));
  }
  imgSearch = query => {
    API.getUserSearch(query)
      .then(res => this.setState({ results: res.data.data }))
      .catch(err => console.log(err));
  }; 
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    this.imgSearch(this.state.search);
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <Results results={this.state.results} />
      </div>
    );
  }
}
export default SearchBar