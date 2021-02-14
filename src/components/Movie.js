import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Movie({ match }) {
  const id = match.params.id
  const [movie, updateMovie] = useState({})
  const [loading, updateLoading] = useState(true)
  
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`)
      .then(({ data }) => {
        updateMovie(data)
        updateLoading(false)
      })
  }, [])

  if (loading){
    return <>
      <img src='https://i.imgur.com/jKTJEFh.png'/>
      <h1>Loading films...</h1>
    </>
  }
  
  let imageSrc = `https://image.tmdb.org/t/p/w342${movie.poster_path}`
  if (`${movie.poster_path}` === 'null') {
    imageSrc = 'https://i.imgur.com/tl0tdJ8.png'
  }

  return <div className='singlemovie'>
    <img className='movieImg' src={imageSrc} alt="Coming soon"/>
    <div className='movieInfo'>
      <h1>{movie.title}</h1>
      <h3 className='movieTag'>{movie.tagline}</h3>
      <p className='movieRuntime'>Length: {movie.runtime} minutes</p>
      <p className='movieOverview'>Description: {movie.overview}</p>
      <p className='movieDate'>Released: {movie.release_date}</p>
      <Link key={movie.id} className='similiarLink' to={`/project-2/similarfilms/${id}`}> Similar Films</Link>
    </div>
  </div>
}
