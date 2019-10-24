import React from 'react'

const FilmPoster = (props) => {
    var posterUrl = "https://image.tmdb.org/t/p/w500"
    var filmposter =posterUrl+props.item.poster_path
    return (
        <img src={posterUrl+props.item.poster_path} alt="filmposter" />
    )
}

export default FilmPoster


