/* eslint-disable no-unreachable */
/* eslint-disable no-use-before-define */
import {DEFAULT_START, DEFAULT_LIMIT} from './constances'

const initState = {type: 'top' , start :DEFAULT_START , limit: DEFAULT_LIMIT};

export function reducerType(state = initState, action){
    if('start' in action) {
        const s = {type : action.type, start : action.start, limit: action.limit };
        console.log(action);
        return s;
    }
    return state;
}