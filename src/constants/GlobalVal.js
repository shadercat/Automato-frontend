const Paths = {
    userLogin: "http://localhost:3000/users/login",
    userLogout: "http://localhost:3000/users/logout",
    dataAPI: "http://localhost:3000/api/authorized",
    main: "http://localhost:3000"
};
const Config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    withCredentials: true
};
export {Paths, Config};