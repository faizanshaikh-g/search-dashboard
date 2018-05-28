import React, { Component } from 'react'

export default class SearchField extends Component {
  render() {
    return (
        <div className="form-group m-auto d-flex justify-content-center p-3">
            <input className="w-100 form-control" type="text" placeholder="Search Candidate by keywords"/>
        </div> 
   )
  }
}
