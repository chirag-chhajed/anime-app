import { useContext } from "react"
import { Context } from "../../context/Context"
import AnimeCard from "../../components/AnimeCard"
export default function Search(){
    const {value,setValue,searchData,setSearchData} = useContext(Context)
    // console.log(value)
    const map = searchData.map((e) => (
        <AnimeCard {...e} key={e.mal_id}/>
    ))
    
    return(
        <>
            
            <input 
                type="text"
                value={value}
                onChange={e=>setValue(e.target.value)}
                onClick={()=>setSearchData([])}
                placeholder="Type your todo"
            />
            <main style={{display:"flex", flexWrap: "wrap",gap: "2rem",padding:"1rem",backgroundColor: "#9d9c97",justifyContent: "space-evenly"}}>
            {map}
        </main>
        
        </>
    )
    
}