import { Context } from "../../context/Context"
import React,{ useContext } from "react"
import { Link } from "react-router-dom"
import AnimeCard from "../../components/AnimeCard"
// import { useParams } from "react-router-dom"

export default function Animes(){

    

    const {animeData} = useContext(Context)
    // console.log(animeData)
    const map = animeData.map(e => (
        <AnimeCard key={e.mal_id} {...e}/>
    ))
    
    return(
        <main style={{display:"flex", flexWrap: "wrap",gap: "2rem",padding:"1rem",backgroundColor: "#9d9c97",justifyContent: "space-evenly"}}>
            {map}
        </main>
    )
}