import React from "react";
import API from "../utils/API";

searchImage= query=>{
    if (query=!null){
    API.getUserSearch(query).then(res.doSomething)
    }
    else{
        API.getRandomImages.then(res.doSomething)
}