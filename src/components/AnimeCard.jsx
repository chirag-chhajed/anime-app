import { Link } from "react-router-dom";
import styles from "../css/animecard.module.css";
import { useContext } from "react";
import { Context } from "../context/Context";

export default function AnimeCard(props) {
  const { mal_id, title, images, score, year } = props;
  const { favouriteAnimes, addToFavourite, removeFromFavourite } =
    useContext(Context);
  const favouriteIcon = () => {
    const alreadyInFavourite = favouriteAnimes.some(
      (anime) => anime.mal_id == mal_id
    );
    if (alreadyInFavourite) {
      return (
        <i
          onClick={() => removeFromFavourite(mal_id)}
          className="ri-heart-fill ri-2x red"
        ></i>
      );
    } else {
      return (
        <i
          onClick={() => addToFavourite(props)}
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
