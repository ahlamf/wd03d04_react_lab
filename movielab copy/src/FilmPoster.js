import React from 'react'
    


const FilmPoster = (props) => {
    // const API_KEY ="https://image.tmdb.org/t/p/w500/"
    // const imageUrl =API_KEY+props.item.poster_path

    return (
    
        <img src= {props.posterUrl}  alt="filmposter" />
  
       
    )
}

export default FilmPoster