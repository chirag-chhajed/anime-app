import Header from './components/Header'
import './App.css'
import {Routes,Route} from "react-router-dom"
import Animes from './pages/Anime/Animes'
import Favourite from './pages/Favourites/Favourite'
import Search from './pages/Search/Search'
import AnimeDetail from './pages/AnimeDetail/AnimeDetail'


function App() {
  

  return (
    <>
      <Header/>
    <Routes>
      <Route path='/' element={<Animes/>} />
      <Route path="/:id" element={<AnimeDetail/>}/>
      <Route path='/favourite' element={<Favourite/>}/>
      <Route path='/search' element={<Search/>}/>
    </Routes>
    </>
    
  )
}

export default App
