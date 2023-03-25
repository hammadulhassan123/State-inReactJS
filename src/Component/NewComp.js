import React, { Component } from 'react'

class NewComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"AOA",
         sub:"Subscribe"
      }
    }
    styles = {
        fontStyle:"italic",
        color:"slategray"
      };

Buttonchange=()=>{
    this.setState({
        message:"ThankYou",
        sub:"Subscribed"
    })
}

    render() {
    return (
      <div className="App"><h3 style= {this.styles}>{this.state.message}</h3>
      <button onClick={this.Buttonchange}>{this.state.sub}</button>
      </div>
    )
  }
}

export default NewComp