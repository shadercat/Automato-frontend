import {Config, Paths} from "../constants/GlobalVal";
import {advancedGetRequest, standardGetRequest} from "./standardRequestFunc";


const DataAccessService = {
    getUserData: function () {
        return standardGetRequest(Paths.getUserData, Config);
    },
    getMachinesData: function () {
        return standardGetRequest(Paths.getMachinesData, Config);
    },
    getMachineData: function (machine_id) {
        return advancedGetRequest(Paths.getMachineData, {mac_id: machine_id}, Config.headers, Config.withCredentials);
    },
    getMachineLog: function (machine_id) {
        return advancedGetRequest(Paths.getMachineLog, {mac_id: machine_id}, Config.headers, Config.withCredentials);
    },
    getMachineStat: function (machine_id) {
        return advancedGetRequest(Paths.getMachineStat, {mac_id: machine_id}, Config.headers, Config.withCredentials);
    },
    getCompanies: function (page) {
        return advancedGetRequest(Paths.getCompanies, {page: page}, Config.headers, Config.withCredentials);
    },
    getCompanyInfo: function (email) {
        return advancedGetRequest(Paths.getCompanyInfo, {email: email}, Config.headers, Config.withCredentials);
    },
    getStatistic: function () {
        return standardGetRequest(Paths.getStatistic, Config);
    }
};

export default DataAccessService;