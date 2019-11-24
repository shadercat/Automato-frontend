import * as types from '../constants/ActionTypes'

export function setAuthorized() {
    return {
        type: types.SET_AUTHORIZED
    }
}

export function setUnauthorized() {
    return {
        type: types.SET_UNAUTHORIZED
    }
}

export function setUserdata(data) {
    return {
        type: types.SET_USER_DATA,
        data: data
    }
}

export function unsetUserdata() {
    return {
        type: types.UNSET_USER_DATA
    }
}

export function setMachinesData(data) {
    return {
        type: types.SET_MACHINES_DATA,
        data: data
    }
}

export function updateMachineData(data) {
    return {
        type: types.UPDATE_MACHINE_DATA,
        data: data
    }
}

export function unsetMachineData() {
    return {
        type: types.UNSET_MACHINES_DATA
    }
}