import React, { Component } from 'react'

export default class Fave extends Component {

   constructor(props) {
       super(props)
       this.handleClick = this.handleClick.bind(this)
   }
    

   handleClick(e) {
    e.stopPropagation()
    console.log('Handling Fave click!')
    this.props.onFaveToggle()
  }

    render() {
        return (
            this.props.isFave? 
            <div className="film-row-fave remove_from_queue" onClick={this.handleClick} >
              <p className="material-icons" >remove_from_queue</p>
           </div> :
            <div className="film-row-fave add_to_queue" onClick={this.handleClick} >
              <p className="material-icons" >add_to_queue</p>
           </div>
        )
    }
}
