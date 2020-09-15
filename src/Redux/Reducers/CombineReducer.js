import albums from "./AlbumReducer"
import users from "./UserReducer"
import pics from "./PicsReducer"
import page from "./PageReducer"
import activePicPage from "./PicPageReducer"
import { combineReducers } from 'redux'

export default combineReducers({
    albums: albums,
    users: users,
    pics: pics,
    activePage: page,
    activePicPage: activePicPage
})