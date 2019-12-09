const Main = "http://localhost:3000/"; //http://localhost:3000/
const Paths = {
    userLogin: Main + "users/login",
    userLogout: Main + "users/logout",
    isAuthorized: Main + "api/authorized",
    getUserData: Main + "api/userdata",
    main: "https://automato-backend.herokuapp.com/",
    registrationUser: Main + "users/register",
    getMachinesData: Main + "api/machines",
    getMachineData: Main + "api/machine",
    createMachine: Main + "machine/create",
    deleteMachine: Main + "machine/delete",
    bindMachine: Main + "api/bindmachine",
    unbindMachine: Main + "api/unbindmachine",
    deleteMachineLogs: Main + "api/deletemachistory",
    getMachineLog: Main + "api/machinelog",
    getMachineStat: Main + "api/machinestat",
    resolveWarnings: Main + "machine/resolve",
    resolveWarn: Main + "machine/logresolve",
    getCompanies: Main + "company/list",
    getCompanyInfo: Main + "company/info"
};
const Config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    withCredentials: true
};
export {Paths, Config};