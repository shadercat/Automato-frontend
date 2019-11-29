const Paths = {
    userLogin: "http://localhost:3000/users/login",
    userLogout: "http://localhost:3000/users/logout",
    isAuthorized: "http://localhost:3000/api/authorized",
    getUserData: "http://localhost:3000/api/userdata",
    main: "http://localhost:3000",
    registrationUser: "http://localhost:3000/users/register",
    getMachineData: "http://localhost:3000/api/machines"
};
const Config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    withCredentials: true
};
export {Paths, Config};