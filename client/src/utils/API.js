import axios from "axios";

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


