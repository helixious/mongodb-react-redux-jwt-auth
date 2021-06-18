
import axios from "axios";

// payments stripe, paypal
// login facebook, twitter, linkedin
// const API_URL = "http://localhost:8080/api/auth/";
const API_URL = "http://192.168.50.151:3000/api/user/"





const signup = (username, email, password) => {
    return axios.post(API_URL + "signup", {
        username,
        email,
        password,
    },
    {
        withCredentials: true
    });
};

const login = (username, password) => {
    let email = username;    
    return axios
        .post(API_URL + "signin", {
            email,
            password,
        },
        {
            withCredentials: true
        }
        )
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        }).catch((err) => {
            if(err.response.data.message) {
                return err.response.data;
            } else if(err.response.data.errors) {
                let message = err.response.data.errors.map((t) => t.msg).join(' & ');
                return {message};
            }

            return 'server error';
        })
};


const signOut = () => {
    return new Promise(resolve => {
        axios.post(API_URL + "signout",null, { 
            withCredentials: true
        }).then((response) => {
            resolve(response);
        }).catch((err) => {
            if(err.response.data) {
                console.log(err.response.data);
            }
            resolve(0);
        })
    });
} 

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


// const signOut = () => {
//     return axios.post(API_URL + "signout",null, { 
//         withCredentials: true
//     }).then((response) => {

//     }).catch((err) => {
//         if(err.response.data) {
//             console.log(err.response.data);
//         }
//     })
// }

const logout = () => {
    localStorage.removeItem("user");
};

const isLoggedIn = () => {
    return new Promise(resolve => {
        return axios.get(API_URL + "active",null, { 
            withCredentials: true
        }).then(res => {
            resolve({active:1});
        }).catch(e => {
            console.log(e);
            resolve({active:0});
        })
    });
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const authServices = {
    signup,
    signOut,
    isLoggedIn,
    login,
    logout,
    getCurrentUser,
    profile
};

export default authServices;