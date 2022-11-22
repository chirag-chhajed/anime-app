import axios from "axios";
import React,{ createContext,useState,useEffect } from "react";

const Context = createContext()

function ContextProvider({children}){

    const [animeData,setAnimeData] = useState(
      ()=>JSON.parse(sessionStorage.getItem("animes")) || []
    )
    const [page,setPage] = useState(1)
    const [value,setValue] = useState("")
    const [searchData,setSearchData] = useState([])
    const [favouriteAnimes,setFavouriteAnimes] = useState(
      ()=>JSON.parse(localStorage.getItem("favourites")) || []
    )
    useEffect(()=>{
      localStorage.setItem("favourites",JSON.stringify(favouriteAnimes))
    },[favouriteAnimes])

    useEffect(()=>{
      sessionStorage.setItem("animes",JSON.stringify(animeData))
    },[animeData])
    useEffect(()=>{
      setTimeout(async()=>{
        const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${value}r&sfw`)
        setSearchData([...response.data.data])
      
      },1000)
    },[value])
    
    useEffect(()=>{
        setTimeout(async()=>{
            const response = await axios.get(`https://api.jikan.moe/v4/top/anime?page=${page}`)
            setAnimeData(e => [...e,...response.data.data])
        },1000)
    },[page])

    useEffect(()=>{
        window.addEventListener("scroll",handleScroll);
        return ()=> window.removeEventListener("scroll",handleScroll)
      },[])
    
      const handleScroll = async () => {
        if(
          window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight
        ){
    
          setPage(e => e+1)
        }
      }
      function addToFavourite(anime){
        setFavouriteAnimes(prevAnimes => [...prevAnimes,anime])
      }
      function removeFromFavourite(id){
        setFavouriteAnimes(prevAnimes => prevAnimes.filter(anime => anime.mal_id !== id) )
      }
return(
        <Context.Provider value={{
          animeData,
          setAnimeData,
          value,
          setValue,
          searchData,
          setSearchData,
          favouriteAnimes,
          addToFavourite,
          removeFromFavourite,
          }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }