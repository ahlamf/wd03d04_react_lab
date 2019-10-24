import React from 'react'


const FilmRow = (props) => {
var posterUrl = "https://image.tmdb.org/t/p/w500"
    return (
        <div className="film-row">
           <img src={posterUrl+props.item.poster_path} alt="filmposter" />
           <div className="film-summary">
                <h1>{props.item.title}</h1>
                <p>{props.item.release_date}</p>
          </div>
       </div>
    )
}

export default FilmRow