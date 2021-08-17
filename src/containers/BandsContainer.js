import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput bands={this.props.bands} addBand={this.props.addBand}/>
        {this.props.bands.map((band, id) => {
          return <li key={id}>{band.name}</li>
        })}
      </div>
    )
  }
}

const mapState = state => {
  return {bands: state.bands}
}

const mapDispatch = dispatch => {
  return {
    addBand: band => dispatch({ 
      type: 'ADD_BAND',
      payload: band,
     })
  }
}

export default connect(mapState, mapDispatch)(BandsContainer)
