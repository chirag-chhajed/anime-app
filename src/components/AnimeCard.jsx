import { Link } from "react-router-dom"
import styles from "../css/animecard.module.css"

export default function AnimeCard(props){
    const {mal_id,title,images,score,year} = props
    return(
        
            <Link to={`/${mal_id}`}>
                <div className={styles.card}>
                    <img src={images.jpg.image_url} alt={title} />
                    <h2>{title}</h2>
                    <div className={styles.logo}>
                        <h3>Rating: {score}</h3>
                        <h3>{year}</h3>
                    </div>
                </div>
            </Link>
            
        
    )
}