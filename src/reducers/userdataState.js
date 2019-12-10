import * as types from '../constants/ActionTypes';

const initialState = {
    _id: "1278389",
    email: "somebody",
    name: "was told me",
    position_type: "default",
    machines: [],
    subscription_type: "default",
    comp_description: "nothing there",
    create_time: 0,
    addData: {
        number: "000-0000-0000-000",
        location: "nowhere"
    }
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