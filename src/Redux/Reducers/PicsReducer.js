import {PICSDATA} from "../Actions/Actions"

const defaultState = []
export default function PicsReducer(state = defaultState, action)
{
    switch(action.type)
    {
        case PICSDATA : {
            state = action.payload
            return state
        }
        default: return state
    }
}