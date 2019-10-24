
import React, { Component } from 'react'
import './App.css'
import Filmlist from './Filmlist'
import Filmdetails from './Filmdetails'
import TMDB from './TMDB'
import './index.css'


export default class App extends Component {
  render() {
    return (
      <div className='film-library'>
        <Filmlist films={TMDB.films}/>
        <Filmdetails films={TMDB.films}/>
      </div>
    )
  }
 }

