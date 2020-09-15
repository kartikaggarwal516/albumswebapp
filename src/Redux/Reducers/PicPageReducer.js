import {SELECT_PICPAGE} from "../Actions/Actions"

const defaultState = 1;
export default function PicPageReducer(state = defaultState, action){
    switch(action.type) {
        case SELECT_PICPAGE: {            
            state = action.payload
            return state
        }       
        default:
            return state
    }
}