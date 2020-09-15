import {USERDATA} from "../Actions/Actions"

const defaultState = []
export default function UserReducer(state = defaultState, action)
{
    switch(action.type)
    {
        case USERDATA : {
            state = action.payload
            return state
        }
        default: return state
    }
}