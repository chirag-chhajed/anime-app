import { Context } from "../../context/Context"
import React,{ useContext } from "react"
import { Link } from "react-router-dom"
// import { useParams } from "react-router-dom"

export default function Animes(){

    

    const {animeData} = useContext(Context)
    // console.log(animeData)
    const map = animeData.map(e => (
        <Link to={`/${e.mal_id}`}>
            <div key={e.mal_id}>
            <h2 style={{wordWrap: "break-word"}} >{e.title}</h2>
        <img src={e.images.jpg.image_url} alt={e.title} />

        </div>
        </Link>
        
        
    ))
    
    return(
        <main style={{display:"flex", flexWrap: "wrap"}}>
            {map}
        </main>
    )
}