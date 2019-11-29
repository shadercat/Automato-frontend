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
    }
};
export default DataPostService;