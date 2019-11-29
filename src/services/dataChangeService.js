import {Config, Paths} from "../constants/GlobalVal";
import {standardDeleteRequest} from "./standardRequestFunc";


const DataChangeService = {
    deleteMachine: function (data) {
        return standardDeleteRequest(Paths.deleteMachine, data, Config.headers, Config.withCredentials);
    },
    deleteMachineLogs: function (data) {
        return standardDeleteRequest(Paths.deleteMachineLogs, data, Config.headers, Config.withCredentials);
    }
};
export default DataChangeService;