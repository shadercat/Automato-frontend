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
