import React from 'react'
import FilmRow from './FilmRow'

class FilmList extends React.Component {

  constructor(props) {
    super(props)
    this.state= {
      filter: 'All'
    }
  }

  handleFilterClick = (filter) => {
    if (filter === 'Faves') {
       console.log("Setting filter to ")
          }
         else{
          console.log("Setting All to ")
         }
    this.setState({
      filter: filter

    })
  }

  render() {
    const Films = this.props.films.map( (item,index) => {
      return(
        <FilmRow
  item={item}
  key={item.id}
  onFaveToggle={() => this.props.onFaveToggle(item)}
  isFave={this.props.faves.includes(item)} 
  />
      )
    })
    return (
      <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          <div className="film-list-filters">
          <div className={`film-list-filter ${this.state.filter === 'All' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('All')}>
                  ALL
                  <span className="section-count">{this.props.films.length}</span>
              </div>
              <div className={`film-list-filter ${this.state.filter === 'Faves' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('Faves')}>
                  FAVES
                  <span className="section-count">{this.props.faves.length}</span>
              </div>
          </div>

          {Films}
      </div>
    )
  }
}

export default FilmList
