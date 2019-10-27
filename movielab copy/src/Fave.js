import React, { Component } from 'react'

export default class Fave extends Component {

   constructor(props) {
       super(props)
       this.state ={
           isFave: false
       }
   }
    

    handleClick =(element)=>{
        element.stopPropagation()
        this.setState({
            isFave: !this.state.isFave
        })
        console.log("handling Fave click!");
      }

    render() {
        return (
            this.state.isFave? 
            <div className="film-row-fave remove_from_queue" onClick={this.handleClick} >
              <p className="material-icons" >remove_from_queue</p>
           </div> :
            <div className="film-row-fave add_to_queue" onClick={this.handleClick} >
              <p className="material-icons" >add_to_queue</p>
           </div>
        )
    }
}
