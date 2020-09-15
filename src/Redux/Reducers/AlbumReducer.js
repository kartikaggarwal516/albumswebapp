import {ALBUMDATA} from "../Actions/Actions"

const defaultState = []
export default function AlbumReducer(state = defaultState, action)
{
    switch(action.type)
    {
        case ALBUMDATA : {
            state = action.payload
            return state
        }
        default: return state
    }
}