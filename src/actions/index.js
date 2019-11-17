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