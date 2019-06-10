const initialState = {
    username: '',
    profile_pic: ''
}

const SYNCHRONIZE = 'SYNCHRONIZE'
const DESYNC = 'DESYNC'

export function synchronize(user){
    return {
        type: SYNCHRONIZE,
        payload: user
    }
}
export function desync(){
    return {
        type: DESYNC,
        payload: {}
    }
}


export default function reducer(state = initialState, action){
    switch(action.type) {
        case SYNCHRONIZE:
            const {username, profile_pic} = action.payload
            return {...state, username, profile_pic}
        case DESYNC:
            return {...initialState}
        default:
            return state
    }
}