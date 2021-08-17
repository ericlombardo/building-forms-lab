import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput />
      </div>
    )
  }
}

// create a prop called addBand that takes in a name concats to store
const mapDispatch = dispatch => {
  return {
    addBand: () => dispatch({ type: 'ADD_BAND' })
  }
}

export default connect(null, mapDispatch)(BandsContainer)
