import * as types from '../constants/ActionTypes';

const initialState = {
    _id: "1278389",
    email: "somebody",
    name: "nnnn",
    position_type: "default",
    machines: [],
    subscription_type: "default",
    comp_description: "nothing there",
    create_time: 0
};

export default function userDataSet(state = initialState, action) {
    switch (action.type) {
        case types.SET_USER_DATA:
            return action.data;
        case types.UNSET_USER_DATA:
            return ;
        default:
            return state;
    }
}