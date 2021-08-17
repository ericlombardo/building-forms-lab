// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  
  state = {
    name: ''
  }

  handleChange = (e) => { // updates state on keystroke change
    this.setState({
      name: e.target.value
    })
  }
  
  handleSubmit = (e) => {
    // call dispatch func. from container via props
    // dispatch needs
    this.props.addBand(this.state.name)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            onChange={this.handleChange}
            type="text"
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
