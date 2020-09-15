import albums from "./AlbumReducer"
import users from "./UserReducer"
import pics from "./PicsReducer"
import { combineReducers } from 'redux'

export default combineReducers({
    albums: albums,
    users: users,
    pics: pics  
})