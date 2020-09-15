//2.action types
export const ALBUMDATA = "ALBUM_DATA"
export const USERDATA = "USER_DATA"
export const PICSDATA = "PICS_DATA"
export const SELECT_PAGE = "SELECT_PAGE"
export const SELECT_PICPAGE = "SELECT_PICPAGE"

//3.Action Creators
export const getAlbumData = info => {
    return{
        type: ALBUMDATA,
        payload: info
    }
}
export const getUserData = info => {
    return{
        type: USERDATA,
        payload: info
    }
}
export const getAlbumPics = info => {
    return{
        type: PICSDATA,
        payload: info
    }
}
export const handlePageChange = page => {    
    return {
        type: SELECT_PAGE,
        payload: page
    }
}
export const handlePicPageChange = page => {    
    return {
        type: SELECT_PICPAGE,
        payload: page
    }
}