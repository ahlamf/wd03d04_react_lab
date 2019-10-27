import React from 'react'
import FilmPoster from './FilmPoster'
import Fave from './Fave'


const FilmRow = (props) => {
    const API_KEY ="https://image.tmdb.org/t/p/w500/"
    const imageUrl =API_KEY+props.item.poster_path

   let handleDetailsClick =(film)=>{  
        console.log("Fetching details for "+props.item.title)
      }

    return (
        <div className="film-row" onClick={() => handleDetailsClick('film')}>
           <FilmPoster posterUrl={imageUrl}/>
           <div className="film-summary">
                <h1>{props.item.title}</h1>
                <p>{new Date().getFullYear(props.item.release_date)}</p>
                 <Fave/>
          </div>
       </div>
    )
}

export default FilmRow

