import React, { Component } from "react"
import axios from "axios"
import { getAlbumPics } from "../Redux/Actions/Actions"
import { withRouter } from "react-router-dom"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Card } from "react-bootstrap"

const pics_url = "https://jsonplaceholder.typicode.com/albums"

class AlbumPics extends Component {
    state = {
        albumTitle: "",
        username: ""
    }
    getPics = (albumid) => {
        axios.get(`${pics_url}/${albumid}/photos`)
            .then((response) => {
                // handle success                
                this.props.getAlbumPics(response.data)
                console.log("pics", this.props.pics)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
    componentDidMount() {
        let albumid = this.props.match.params.albumid
        let { title, name } = this.props.location.state
        this.getPics(albumid)
        this.setState({
            albumTitle: title,
            username: name
        })
    }
    render() {
        const { pics } = this.props
        const { albumTitle, username } = this.state
        return (
            <div className="picspage">
                <div className="picsbox">
                    <h2>{albumTitle}</h2>
                    <h4>{username}</h4>
                    <div className="picslist">
                        {pics.map((pic, i) => {
                            return (
                                <Card className="piccard" key={i} style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={pic.url} />
                                    <Card.Body>
                                        <Card.Title>{pic.title}</Card.Title>
                                    </Card.Body>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = store => {
    return {
        pics: store.pics
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        { getAlbumPics }, dispatch
    )
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumPics))