import React from 'react'
import FilmPoster from './FilmPoster'
import Fave from './Fave'


const FilmRow = (props) => {
    const API_KEY ="https://image.tmdb.org/t/p/w500/"
    const imageUrl =API_KEY+props.item.poster_path

   

    return (
        <div className="film-row" >
           <FilmPoster posterUrl={imageUrl}/>
           <div className="film-summary">
                <h1>{props.item.title}</h1>
                <p>{new Date().getFullYear(props.item.release_date)}</p>
                 <Fave onFaveToggle={props.onFaveToggle} isFave={props.isFave}/>
          </div>
       </div>
    )
}

export default FilmRow

