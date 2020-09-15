import React, { Component } from "react"
import { getAlbumData, getUserData } from "../Redux/Actions/Actions"
import "../Styles/home.css"
import axios from "axios"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Button } from "react-bootstrap"
import AlbumPagination from "./AlbumPagination"

const album_url = "https://jsonplaceholder.typicode.com/albums/"
const user_url = "http://jsonplaceholder.typicode.com/users"

class Home extends Component {
    state = {

    }
    getAlbums = () => {
        axios.get(album_url)
            .then((response) => {
                // handle success
                let start = (this.props.activePage-1) * 5
                let albums = response.data.slice(start,start+5)                               
                this.props.getAlbumData(albums)
                console.log("albums", this.props.albums)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
    getUsers = () => {
        axios.get(user_url)
            .then((response) => {                
                // handle success                                               
                this.props.getUserData(response.data)
                console.log("users", this.props.users)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
    clickHandler = (id,title,name) => {
        this.props.history.push({
            pathname: `/${id}`,
            state: {title: title,
                    name: name}
        })
    }
    componentDidMount() {
        this.getAlbums()
        this.getUsers()
    }
    componentDidUpdate(prevprops){
        if(prevprops.activePage != this.props.activePage)
        this.getAlbums()
    }
    render() {
        const { albums, users } = this.props
        return (
            <div className="albums">
                <div className="albumbox">
                    <h2>List Of Albums</h2>
                    <div className="albumlist">
                        {albums.map((album, i) => {
                            return (
                                <div key={i} className="albuminfo">
                                    <h3>ALBUM TITLE: {album.title}</h3>
                                    <div >
                                        {users.map((user,j) => {
                                            return (
                                                <div key={j}>
                                                    {album.userId == user.id
                                                        && <div className="moreinfo">
                                                            <h5>User:{user.name}</h5>
                                                            <div className="morebtn" onClick={() => this.clickHandler(album.id,album.title,user.name)}>VIEW MORE</div>
                                                        </div>
                                                    }
                                                </div>
                                            )
                                        })}                                        
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <AlbumPagination />
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = store => {
    return {
        albums: store.albums,
        users: store.users,
        activePage: store.activePage
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        { getAlbumData, getUserData }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)