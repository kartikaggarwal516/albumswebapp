//2.action types
export const ALBUMDATA = "ALBUM_DATA"
export const USERDATA = "USER_DATA"
export const PICSDATA = "PICS_DATA"

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