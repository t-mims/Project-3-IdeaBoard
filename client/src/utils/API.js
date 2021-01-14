import axios from "axios";
//for unsplash images api
//key 1 is access key, key2 is security key for unsplash API
const accessKey= "0fOPsIZ3x5wzU0_f5CoDIvuk6Bf3IHmpTzrpix9EINM";
// const randomURL="https://api.unsplash.com/photos/random/?count=30";
const queryURL="https://api.unsplash.com/"; 
//====Having ongoing issue with cross-origin/ not fully allowing call to API

// Access to XMLHttpRequest at 'https://unsplash.com/developers' (redirected from 'url') from origin 'http://localhost:3000' 
// has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header contains the invalid value 'unsplash.com'.
// hits a 200 initially then a 301 then a failed redirect 

export default{
    getRandomImages: function(){
        return axios.get("https://api.unsplash.com/photos/?client_id="+accessKey);
    },
    getUserSearch: function(query){
        return axios.get(queryURL+ "?"+query +"&client_id="+accessKey);
    }
};
// https://api.unsplash.com/
// https://api.unsplash.com/photos/random/?count=30&client_id=0fOPsIZ3x5wzU0_f5CoDIvuk6Bf3IHmpTzrpix9EINM

