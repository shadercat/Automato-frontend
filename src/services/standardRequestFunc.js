import axios from "axios";
import queryString from "query-string";

const standardGetRequest = function (reqUrl, config) {
    return new Promise((resolve, reject) => {
        axios.get(reqUrl, config)
            .then((res) => {
                if (res.data.success === true) {
                    resolve(res.data.data);
                } else {
                    reject(res.data.reason);
                }
            })
            .catch((err) => {
                reject(err);
            });
    })
};

var standardPostRequest = function (reqUrl, args, config) {
    return new Promise((resolve, reject) => {
        axios.post(reqUrl, queryString.stringify(args), config)
            .then((res) => {
                if (res.status === 200) {
                    if (res.data.success === true) {
                        resolve(res.data);
                    } else {
                        reject(res.data.reason);
                    }
                }
            })
            .catch((err) => {
                reject(err);
            })
    })
};

var standardPutRequest = function (reqUrl, args, config) {
    return new Promise((resolve, reject) => {
        axios.put(reqUrl, queryString.stringify(args), config)
            .then((res) => {
                if (res.status === 200) {
                    if (res.data.success === true) {
                        resolve(res.data);
                    } else {
                        reject(res.data.reason);
                    }
                }
            })
            .catch((err) => {
                reject(err);
            })
    })
};

var standardDeleteRequest = function (reqUrl, args, header, cred) {
    return new Promise((resolve, reject) => {
        axios.delete(reqUrl, {params: args, headers: header, withCredentials: cred})
            .then((res) => {
                if (res.status === 200) {
                    if (res.data.success === true) {
                        resolve(res.data);
                    } else {
                        reject(res.data.reason);
                    }
                }
            })
            .catch((err) => {
                reject(err);
            })
    })
};

export {standardPostRequest, standardGetRequest, standardPutRequest, standardDeleteRequest};
