import axios from "axios"; 
  
export default {
 
    // Gets all boards
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
        return axios.post("/api/user/board", data);
     }
};