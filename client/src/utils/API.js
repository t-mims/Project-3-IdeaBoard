import axios from "axios";
//for unsplash images api
//key 1 is access key, key2 is security key for unsplash API
const accessKey = "0fOPsIZ3x5wzU0_f5CoDIvuk6Bf3IHmpTzrpix9EINM";
// const randomURL="https://api.unsplash.com/photos/random/?count=30";
const queryURL = "https://api.unsplash.com/";
//====Having ongoing issue with cross-origin/ not fully allowing call to API

// Access to XMLHttpRequest at 'https://unsplash.com/developers' (redirected from 'url') from origin 'http://localhost:3000' 
// has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header contains the invalid value 'unsplash.com'.
// hits a 200 initially then a 301 then a failed redirect 

export default {
    getRandomImages: function () {
        return axios.get("https://api.unsplash.com/photos/?client_id=" + accessKey);
    },
    getUserSearch: function (query) {
        return axios.get(queryURL + "?" + query + "&client_id=" + accessKey);
    },
    // Gets all books
    getUser: function () {
        return axios.get("/api/user/login");
    },
    // Gets the board with the given id
    getBoard: function (id) {
        return axios.get("/api/user/" + id);
    },
    // Deletes the board with the given id
    deleteBoard: function (id) {
        return axios.delete("/api/user/board" + id);
    },
    // Saves a board to the database
    saveBoard: function (data) {
        return axios.post("/api/user/board", data;
    }
};

