import axios from "axios";

const API_URL = "http://192.168.50.151:4000/api/user/";

const profile = (username, email, password) => {
    return new Promise(resolve => {
        return axios.get(API_URL + "profile",null, { 
            withCredentials: true
        }).then(res => {
            resolve(res);
        }).catch(e => {
            console.log(e);
            resolve(false);
        })
    });
};

const userServices = {
    profile
}

export default userServices;