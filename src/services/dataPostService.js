import {Config, Paths} from "../constants/GlobalVal";
import {standardPutRequest, standardPostRequest} from "./standardRequestFunc";


const DataPostService = {
    createMachine: function (data) {
        return standardPutRequest(Paths.createMachine, data, Config);
    },
    bindMachine: function (data) {
        return standardPostRequest(Paths.bindMachine, data, Config);
    },
    unbindMachine: function (data) {
        return standardPostRequest(Paths.unbindMachine, data, Config);
    },
    resolveWarnings: function (machine_id) {
        return standardPostRequest(Paths.resolveWarnings, {mac_id: machine_id}, Config);
    },
    resolveWarn: function (warn_id) {
        return standardPostRequest(Paths.resolveWarn, {_id: warn_id}, Config);
    },
    updateUserData: function (data) {
        return standardPostRequest(Paths.updateUserData, data, Config);
    }
};
export default DataPostService;