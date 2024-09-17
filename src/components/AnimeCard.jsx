import { Link } from "react-router-dom";
import styles from "../css/animecard.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addAnimeToFavourites,
  removeAnimeFromFavourites,
} from "../store/api/hello";

export default function AnimeCard(props) {
  const { mal_id, title, images, score, year } = props;

  const state = useSelector((state) => state.favourites.value);

  const dispatch = useDispatch();
  const favouriteIcon = () => {
    const alreadyInFavourite = state.some((anime) => anime.mal_id == mal_id);
    if (alreadyInFavourite) {
      return (
        <i
          onClick={() => dispatch(removeAnimeFromFavourites(mal_id))}
          className="ri-heart-fill ri-2x red"
        ></i>
      );
    } else {
      return (
        <i
          onClick={() => dispatch(addAnimeToFavourites(props))}
          className="ri-heart-line ri-2x"
        ></i>
      );
    }
  };
  // console.log(favouriteAnimes)

  return (
    <div className={styles.card}>
      <Link to={`/${mal_id}`}>
        <img src={images.jpg.image_url} alt={title} />
        <h2>{title}</h2>
      </Link>
      <div className={styles.logo}>
        <h3>Rating: {score}</h3>
        {favouriteIcon()}
      </div>
    </div>
  );
}
