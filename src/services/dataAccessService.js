import axios from "axios";
import {Config, Paths} from "../constants/GlobalVal";

const DataAccessService = {
    getUserData: function () {
        return new Promise((resolve, reject) => {
            axios.get(Paths.getUserData, Config)
                .then((res) => {
                    if(res.data.success === true){
                        resolve(res.data.data);
                    } else {
                        reject(res.data.reason);
                    }
                })
                .catch((err) => {
                    reject(err);
                });
        })
    }
};

export default DataAccessService;