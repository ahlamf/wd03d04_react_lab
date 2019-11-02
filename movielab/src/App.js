
import React, { Component } from 'react'
import './App.css'
import Filmlist from './Filmlist'
import Filmdetails from './Filmdetails'
import TMDB from './TMDB'
import './index.css'
import axios from "axios"


export default class App extends Component {

  constructor(props){
    super(props)
    this.handleFaveToggle = this.handleFaveToggle.bind(this)
    this.handleDetailsClick = this.handleDetailsClick.bind(this)
    this.state={
      films :TMDB.films,
      faves : [],
      current : null
    }
    
  }

  handleFaveToggle(film){
    const faves = this.state.faves.slice()
    const filmIndex = faves.indexOf(film)
    if(filmIndex >-1){
      console.log("Removing "+ film.title+" from faves")
      faves.splice(filmIndex, 1)
    }
    else{
      console.log("Adding "+ film.title+" to faves")
      faves.push(film)
      }
      this.setState({faves})
    }
    handleDetailsClick(film){  
      console.log("Fetching details for "+film.title)
      const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`

      axios({
        method: 'GET',
        url: url
      }).then(response => {
        console.log(response) 
        console.log(`Fetching details for ${film.title}`);
        this.setState({ current: response.data })
      })

      this.setState({current: film})
    }
    

  render() {
    console.log(TMDB);
    return (
      <div className="App" >
        <div className="film-library">
        <Filmlist films={this.state.films} onFaveToggle={this.handleFaveToggle} faves={this.state.faves} onDetailsClick={this.handleDetailsClick}/>
        <Filmdetails films={this.state.current}/>
        </div>
      </div>
    )
  }
 }
 
