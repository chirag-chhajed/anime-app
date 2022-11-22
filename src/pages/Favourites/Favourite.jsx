import { useContext } from "react"
import { Context } from "../../context/Context"
import AnimeCard from "../../components/AnimeCard"

export default function Favourite(){
    const {favouriteAnimes} = useContext(Context)
    console.log(favouriteAnimes)
    const map = favouriteAnimes.map(e => (
        <AnimeCard key={e.mal_id} {...e} />
    ))
    const display = favouriteAnimes.length > 0 ? map : <h3>There are no items in Favourite</h3>
    
    return(
         
        <main style={{display:"flex", flexWrap: "wrap",gap: "2rem",padding:"1rem",backgroundColor: "#9d9c97",justifyContent: "space-evenly"}}>
            {display}
        </main>
        
        
        
        
    )
}