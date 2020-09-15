import React from "react";
import Pagination from "react-js-pagination";
import { connect } from "react-redux";
import {handlePageChange} from "../Redux/Actions/Actions"
import { bindActionCreators } from "redux";

const AlbumPagination = props => {
  return(
    <div className="pagebox">
        <Pagination
          prevPageText='Previous'
          nextPageText='Next'
          firstPageText= ""
          lastPageText=''
          activePage={props.activePage}
          itemsCountPerPage={5}
          totalItemsCount={100}
          pageRangeDisplayed={4}
          onChange={props.handlePageChange.bind(this)}
        />
      </div>
  )
}

const mapStateToProps = store => {
  return{
    activePage: store.activePage
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {handlePageChange}, dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumPagination)