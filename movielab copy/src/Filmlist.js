import React from 'react'
import FilmRow from './FilmRow'


const Filmlist = (props) => {
    let Films =props.films.map((item,index)=>{
        return  <FilmRow  item = {item}/>
    })
    return (
    <div className="film-list">
    <h1 className="section-title">FILMS</h1>
    {Films}
   
  </div>
       
    )
}

export default Filmlist
