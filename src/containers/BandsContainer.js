import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
      </div>
    )
  }
}

// create a prop called addBand that takes in a name concats to store
const mapDispatch = dispatch => {
  return {
    addBand: band => dispatch({ 
      type: 'ADD_BAND',
      payload: band,
     })
  }
}

export default connect(null, mapDispatch)(BandsContainer)
