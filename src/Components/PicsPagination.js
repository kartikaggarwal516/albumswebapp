import React from "react";
import Pagination from "react-js-pagination";
import { connect } from "react-redux";
import {handlePicPageChange} from "../Redux/Actions/Actions"
import { bindActionCreators } from "redux";

const PicsPagination = props => {    
  return(
    <div className="pagebox">
        <Pagination
          prevPageText='Previous'
          nextPageText='Next'
          firstPageText= ""
          lastPageText=''          
          activePicPage={props.activePicPage}
          itemsCountPerPage={9}
          totalItemsCount={props.pics.length}
          pageRangeDisplayed={4}
          onChange={props.handlePicPageChange.bind(this)}
        />
      </div>
  )
}

const mapStateToProps = store => {
  return{
    activePicPage: store.activePicPage,
    pics: store.pics
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {handlePicPageChange}, dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PicsPagination)