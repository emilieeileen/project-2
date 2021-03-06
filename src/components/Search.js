import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Pagination } from 'semantic-ui-react'

export default function Search({ match }) {
  const id = match.params.id
  const [discoverMovies, updateDiscoverMovies] = useState([])
  const [loading, updateLoading] = useState(true)
  const [search, updateSearch] = useState('')
  const [activePage, setActivePage] = useState('')
  const [apiUrl, setApiUrl] = useState(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
  const [pageNo, updatePageNo] = useState('1')

  useEffect(() => {
    axios.get(apiUrl)
      .then(({ data }) => {
        updateDiscoverMovies(data.results)
        updateLoading(false)
      })
  }, [apiUrl])

  if (loading) {
    return <>
      <img src='https://i.imgur.com/jKTJEFh.png'/>
      <h1>Loading films...</h1>
    </>
  }
  
  const pageChange = (page, pageInfo) => {
    setActivePage(pageInfo.activePage)
    if (search === '') {
      setApiUrl(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageInfo.activePage}`)
    } else {
      setApiUrl(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${search}&page=${pageInfo.activePage}&include_adult=false`)
    }
    updatePageNo(pageInfo.activePage)
  }

  return <>
    <div className="container">
      <input className='searchFilms' onChange={(event) => {
        updateSearch(event.target.value)
        setApiUrl(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${event.target.value}&page=${pageNo}&include_adult=false`)
      }} placeholder="Search Movie Titles..."/>
      
    </div>
    <div className='newmoviediv'>
      {discoverMovies.map(newmovie => {
        let imageSrc = `https://image.tmdb.org/t/p/w154${newmovie.poster_path}`
        if (`${newmovie.poster_path}` === 'null') {
          imageSrc = 'https://i.imgur.com/tl0tdJ8.png'
        }

        return <Link key={newmovie.id} to={`/project-2/movie/${newmovie.id}`}>
          <div className='newmoviecard'>
            <img className='newmovieposter' src={imageSrc} alt="Coming soon"/>
          </div>
        </ Link>
      })}
    </div>


    <div className='pagination'>
      <Pagination 
        activePage={activePage}
        onPageChange={pageChange}
        totalPages={500}
        ellipsisItem={'. . .'}/>
    </div>
  </>
}



