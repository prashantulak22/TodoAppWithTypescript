import { LOG_IN, LOG_OUT } from '../actions/ActionTypes';

interface AuthReducer {
    isLogged: boolean,
    userId: string | null | undefined,
}
interface ReducerAction {
    type: string,
    payload?: string | null,
}

const initialState: AuthReducer = {
    isLogged: false,
    userId:null
}
const authReducer = (state = initialState, action: ReducerAction) => {
    switch (action.type) {
        case LOG_IN:
            return { isLogged: true , userId: action.payload};
        case LOG_OUT:
            return { isLogged: false, userId: null};
        default:
            return state;
    }
}

export default authReducer;