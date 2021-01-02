import axios from "axios";
//for images api
//key 1 is access key, key2 is security key for unsplash API
const key1= "0fOPsIZ3x5wzU0_f5CoDIvuk6Bf3IHmpTzrpix9EINM";
const key2="bRb0d6z50WNoYe1anJu6GNY7OxsCtIuVlDpF3otQFZ4";
const randomURL="https://api.unsplash.com/GET/photos/random/count=30";
const queryURL="https://api.unsplash.com/GET/"; 
export default{
    getRandomImages: function(){
        return axios.get(randomURL+key);
    },
    getUserSearch: function(query){
        return axios.get(queryURL+ query +key);
    }
}
