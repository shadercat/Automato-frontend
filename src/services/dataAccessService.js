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
    }
};

export default DataAccessService;