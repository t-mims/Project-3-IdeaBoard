import axios from "axios";
//for unsplash images api
//key 1 is access key, key2 is security key for unsplash API
const accessKey= "0fOPsIZ3x5wzU0_f5CoDIvuk6Bf3IHmpTzrpix9EINM";
const randomURL="https://api.unsplash.com/photos/random/?count=30";
const queryURL="https://api.unsplash.com/"; 
export default{
    getRandomImages: function(){
        return axios.get("https://api.unsplash.com/photos/random/?count=30&client_id=0fOPsIZ3x5wzU0_f5CoDIvuk6Bf3IHmpTzrpix9EINM");
    },
    getUserSearch: function(query){
        return axios.get(queryURL+ "?"+query +"&client_id="+accessKey);
    }
};

