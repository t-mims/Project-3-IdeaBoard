import React, { Component } from "react";
import Container from "../container";
import SearchBar from "../searchBar";
import API from "../utils/API";
// a lot of below code will be moved into a sep file; check Week 19 Act 23 for reference
class ImageRes extends Component {
    state={
        
    }
    searchImage = query => {
        if (query = !null) {
            API.getUserSearch(query).then(res.doSomething)
        }
        else {
            API.getRandomImages.then(res.doSomething)
        }
    }
    getRandomImages=()=>{
        API.getRandomImages().then(res=>
            //sets up the pages to automatically renders a set of random impages from unsplash
            //state needs to  be set 
            this.setState)
    }
    componentDidMount(){
        this.getRandomImages()
    }
}