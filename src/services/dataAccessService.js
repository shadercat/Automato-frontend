import {Config, Paths} from "../constants/GlobalVal";
import {standardGetRequest} from "./standardRequestFunc";


const DataAccessService = {
    getUserData: function () {
        return standardGetRequest(Paths.getUserData, Config);
    },
    getMachinesData: function () {
        return standardGetRequest(Paths.getMachineData, Config);
    }
};

export default DataAccessService;