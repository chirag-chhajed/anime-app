import { Context } from "../../context/Context"
import React,{ useContext } from "react"
import { useParams } from 'react-router-dom'


export default function AnimeDetail(){
    const {animeData} = useContext(Context)
    console.log(animeData)
    const {id} = useParams()

   
    let getDetails = null

    animeData.flat().forEach(anime => {
        if(anime.mal_id === Number(id)){
            getDetails = anime
        }
    })
    console.log(getDetails)
    
    
    
  return (
    <div key={id}>
      {getDetails && 
      <>
        <h1>{getDetails.title}</h1>
        <img src={getDetails.images.jpg.large_image_url} alt={"image"} />
    </>
      }
    </div>
  )
}


