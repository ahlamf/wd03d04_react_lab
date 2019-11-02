import React from 'react'

const Filmdetails = (props) => {
const backdropUrl = `https://image.tmdb.org/t/p/w1280/${props.film.backdrop_path}`
const posterUrl = `https://image.tmdb.org/t/p/w780/${props.film.poster_path}`
let details

    return (
      <div className="film-detail">
  <p>
    <i className="material-icons">subscriptions</i>
    <span>No film selected</span>
  </p>
</div>
    )
}

export default Filmdetails
