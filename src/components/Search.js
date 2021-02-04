import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Pagination } from 'semantic-ui-react'


export default function Search({ match }) {
  const id = match.params.id
  const [discoverMovies, updateDiscoverMovies] = useState([])
  const [loading, updateLoading] = useState(true)
  const [genre, updateGenre] = useState('All')
  const [search, updateSearch] = useState('')
  const [activePage, setActivePage] = useState('')
  const [apiUrl, setApiUrl] = useState(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
  //const plainUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${GenreID}&with_keywords=${searchValue}`


  useEffect(() => {
    axios.get(apiUrl)
      .then(({ data }) => {
        updateDiscoverMovies(data.results)
        updateLoading(false)
      })
  }, [apiUrl])
  
  if (loading) {
    return <h1>Loading!!!!</h1>
  }
  
  function filterMovies() {
    return discoverMovies.filter(movie => {
      return (genre === 'All' || (movie.genre_ids.includes(Number(genre)))) 
        && movie.original_title.toLowerCase().includes(search.toLowerCase())
    })
  }
   
  const onChange = (page, pageInfo) => {
    setActivePage(pageInfo.activePage)
    setApiUrl(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageInfo.activePage}`)
  }

  //{setApiUrl(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNo}&with_genres=${Number(genre)}`)}

  return <>
    <div className="container">
      <select className='selectGenre' onChange={(event) => 
        updateGenre(event.target.value) 
      }>
        <option>All</option>
        <option value="28">Action</option>
        <option value="12">Adventure</option>
        <option value="16">Animation</option>
        <option value="35">Comedy</option>
        <option value="80">Crime</option>
        <option value="99">Documentary</option>
        <option value="18">Drama</option>
        <option value="10751">Family</option>
        <option value="14">Fantasy</option>
        <option value="36">History</option>
        <option value="27">Horror</option>
        <option value="10402">Music</option>
        <option value="9648">Mystery</option>
        <option value="10749">Romance</option>
        <option value="878">Science Fiction</option>
        <option value="10770">TV Movie</option>
        <option value="53">Thriller</option>
        <option value="10752">War</option>
        <option value="37">Western</option>
      </select>
      <input className='searchFilms' onChange={(event) => updateSearch(event.target.value)} placeholder="Search..."/>
    </div>
    
    <div className='newmoviediv'>
      {filterMovies().map((newmovie, i) => {
        return <Link key={newmovie.id} to={`/project-2/movie/${newmovie.id}`}>
          <div className='newmoviecard'>
            <img className='newmovieposter' src={`https://image.tmdb.org/t/p/w154${newmovie.poster_path}`} alt="Coming soon"/>
          </div>
        </ Link>
      })}
    </div>

    <div className='pagination'>
      <Pagination 
        activePage={activePage}
        onPageChange={onChange}
        totalPages={500}
        ellipsisItem={'. . .'}/>
    </div>
  </>
}

