import axios from "axios";
import {Config, Paths} from "../constants/GlobalVal";
import queryString from "query-string";

const AuthorizationService = {
    loginMethod: function (args){
        return new Promise ((resolve, reject) => {
            axios.post(Paths.userLogin, queryString.stringify(args), Config)
                .then( (res) => {
                    if (res.status === 200) {
                        if(res.data.auth === true){
                            resolve(res.data);
                        } else {
                            reject(res.data.reason);
                        }
                    }
                })
                .catch((err) => {
                    reject(err);
                });
        })
    },
    checkLoginMethod: function () {
        return new Promise( (resolve, reject) => {
            axios.get(Paths.isAuthorized, Config)
                .then((res) => {
                    resolve(res.data.auth);
                })
                .catch((err) =>{
                    reject(err);
                })
        })
    },
    logoutMethod: function () {
        return new Promise((resolve, reject) => {
            axios.post(Paths.userLogout, {}, Config)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) =>{
                    reject(err);
                })
        })
    }
};
export default AuthorizationService;