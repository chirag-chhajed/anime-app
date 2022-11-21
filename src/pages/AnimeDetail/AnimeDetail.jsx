import { Context } from "../../context/Context"
import React,{ useContext } from "react"
import { useParams } from 'react-router-dom'
import styles from "../../css/animedetail.module.css"


export default function AnimeDetail(){
    const {animeData} = useContext(Context)
    // console.log()
    const {id} = useParams()
    console.log(id)

   
    let getDetails = null

    animeData.flat().forEach(anime => {
        if(anime.mal_id === Number(id)){
            getDetails = anime
        }
    })
    console.log(getDetails)
    
    const {images,title,episodes,trailer,producers,score,synopsis,genres} = getDetails
    
    
  return (
    <>
      {!getDetails && "Loading..."}
      {getDetails &&
        <div className={styles.animedetail}>
          <img src={images.jpg.image_url} alt={title} />
          <div>
            <h2>{title}</h2>
            <h3>No. of Episodes: {episodes}</h3>
            <h3>{score}</h3>
            {genres.map(e => (<h4>{e.name}</h4>))}
            {producers.map(e => (<h4>{e.name}</h4>))}
            <h5>{synopsis}</h5> 
            <iframe 
              src={trailer.embed_url} 
              frameborder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            
            
          </div>
        </div>
      }
    </>
  )
}


