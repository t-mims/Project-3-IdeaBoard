import axios from "axios";
//for unsplash images api
//key 1 is access key, key2 is security key for unsplash API
// const accessKey= "0fOPsIZ3x5wzU0_f5CoDIvuk6Bf3IHmpTzrpix9EINM";
// // const randomURL="https://api.unsplash.com/photos/random/?count=30";
// const queryURL="https://api.unsplash.com/"; 
export default{
    register: function(userInfo) {
        return axios.post("/api/signup", userInfo);

    },
    login: function(loginInfo) {
        return axios.post("/api/login", loginInfo);
    },
    getBoards: function () {
        return axios.get("/api/user/board");
    },
    saveBoard: function(boardInfo){
        return axios.post("/api/user/board",boardInfo)
    },

};


