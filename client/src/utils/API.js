import axios from "axios"; 
  
export default {
 
    // Gets all boards
    getUser: function () {
        return axios.get("/api/user/login");
    },
    getUserSearch: function(query){
        return axios.get(queryURL+ "?"+query +"&client_id="+accessKey);
    },
    register: function(userInfo) {
        return axios.post("/api/signup", userInfo);

    },
    login: function(loginInfo) {
        return axios.post("/api/login", loginInfo);
    }

};


