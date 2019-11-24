import * as types from '../constants/ActionTypes';

const initialState = {machines: []};

export default function machineDataSet(state = initialState, action) {
    switch (action.type) {
        case types.SET_MACHINES_DATA:
            return action.data;
        case types.UNSET_MACHINES_DATA:
            return {machines: []};
        case types.UPDATE_MACHINE_DATA:
            return {
                machines: state.map(function (item) {
                    return (item.mac_id !== action.data.mac_id) ? (item) : (action.data);
                })
            };
        default:
            return state;
    }
}