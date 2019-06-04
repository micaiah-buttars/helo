const initialState = {
    username: '',
    id: 0,
    profile_pic: ''
}

const SYNCHRONIZE = 'SYNCHRONIZE'

export function synchronize(user){
    console.log(user)
    return {
        type: SYNCHRONIZE,
        payload: user
    }
}


export default function reducer(state = initialState, action){
    switch(action.type) {
        case SYNCHRONIZE:
            const {username, id, profile_pic} = action.payload
            return {...state, username, id, profile_pic}
        default:
            return state
    }
}