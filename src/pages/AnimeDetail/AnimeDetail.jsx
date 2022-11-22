import { Context } from "../../context/Context"
import React,{ useContext,useEffect,useState } from "react"
import { useParams } from 'react-router-dom'
import Loader from "../../components/Loader"
import styles from "../../css/animedetail.module.css"
import axios from "axios"


export default function AnimeDetail(){
    const {animeData} = useContext(Context)
    const [details,setDetails] = useState([])
    // console.log()
    const {id} = useParams()
    console.log(id)

   const [loader,setLoader] = useState(true)
    
    useEffect(()=>{
      setTimeout(async()=>{
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}/full`)
        setDetails(response.data.data)
        setLoader(false)
      })
    },[id])

    // animeData.flat().forEach(anime => {
    //     if(anime.mal_id === Number(id)){
    //         getDetails = anime
    //     }
    // })
    console.log(details)
    
    const {images,title,episodes,trailer,producers,score,synopsis,genres,mal_id} = details
    // console.log(images.jpg.image_url)

    // const mapGenre = genres.map(e => (
    //   <h2>{e.name}</h2>
    // ))
    
    
  return (
    <>
    {loader && <Loader/>}
    {details && <div key={mal_id}>
      <h2>{title}</h2>
      {genres && genres.map(e => (
        <h2>{e.name}</h2>
      ))}
      
      {images && <img src={images.jpg.image_url} alt={title} />}
      <p>{synopsis}</p>
    </div>}
    
      
    </>
  )
}
// {!details && "Loading..."}
//       {details &&
//         <div className={styles.animedetail}>
//           {/* <img src={images.jpg.image_url} alt={title} /> */}
//           <div>
//             <h2>{title}</h2>
//             <h3>No. of Episodes: {episodes}</h3>
//             <h3>{score}</h3>
//             {genres.map(e => (<h4>{e.name}</h4>))}
//             {producers.map(e => (<h4>{e.name}</h4>))}
//             <h5>{synopsis}</h5> 
//             <iframe 
//               src={trailer.embed_url} 
//               frameborder="0"
//               allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             ></iframe>
            
            
//           </div>
//         </div>
//       }


