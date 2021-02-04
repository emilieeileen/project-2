import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Similar({ match }) {
  const id = match.params.id
  const [similarFilms, updateSimilarFilms] = useState([])
  

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.API_KEY}&language=en-US&page=1`)
      .then(({ data }) => {
        updateSimilarFilms(data.results)
      })
  }, [])

  console.log(similarFilms)

  return <div>
    <h1>Similar Films</h1>
    <div className='similarfilmsdiv'>
      {similarFilms.map((similar) => {
        return <Link key={similar.id} to={`/project-2/movie/${similar.id}`} >
          <div className='similarcard'>
            <img className='similarposter' src={`https://image.tmdb.org/t/p/w154${similar.poster_path}`} alt="Coming soon"/>
          </div>
        </Link>
      })}
    </div>
  </div>
}

