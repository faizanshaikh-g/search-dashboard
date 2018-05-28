import React, { Component } from 'react'
import SearchField from './SearchField'

export default class MainPanel extends Component {
  render() {
    return (
     <div className="container-fluid">
        <div className="row">
            <div className="col-md-12 col-sm-12 ">
                <SearchField/>
            </div>
        </div>
      </div>
    )
  }
}
