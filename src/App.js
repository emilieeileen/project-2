import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import NavBar from './components/Navbar'
import Movie from './components/Movie'
import Similar from './components/Similar'
import Genres from './components/Genres'
import Search from './components/Search'
import axios from 'axios'
import './styles/style.scss'


const App = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/project-2" component={Home}/>
      <Route path="/project-2/genres/" component={Genres}/>
      <Route path="/project-2/search/" component={Search}/>
      <Route path="/project-2/similarfilms/:id" component={Similar}/> 
      <Route path="/project-2/movie/:id" component={Movie}/>
    </Switch>
  </BrowserRouter>
)

const Home = () => {
  const [trending, updateTrending] = useState([])
  const [loading, updateLoading] = useState(true)

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.API_KEY}`)
      .then(({ data }) => {
        updateTrending(data.results)
        updateLoading(false)
      })
  }, [])

  if (loading){
    return <>
      <img src='https://i.imgur.com/jKTJEFh.png'/>
      <h1>Loading films...</h1>
    </>
  }

  return <div className='homepage'> 
    <h1 className='title'>Friday Night Films</h1>
    <div className='trendingdiv'>
      {trending.map((movie) => { 
        return <Link key={movie.id} to={`/project-2/movie/${movie.id}`}>
          <div className='trendingcard'>
            <img className='trendingposter'src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`} alt="Coming soon"/>
          </div>
        </Link>
      })
      }
    </ div>
  </div>
}

export default App

