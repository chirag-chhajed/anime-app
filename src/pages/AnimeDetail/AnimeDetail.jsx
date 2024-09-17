import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import styles from "../../css/animedetail.module.css";
import { useGetAnimeFullByIdQuery } from "../../store/api";

export default function AnimeDetail() {
  const { id } = useParams();

  const { data, isLoading } = useGetAnimeFullByIdQuery({
    id,
  });

  const {
    images,
    title,
    episodes,
    trailer,
    producers,
    score,
    synopsis,
    genres,
    mal_id,
  } = data || {};

  return (
    <>
      {isLoading && <Loader />}
      {data && (
        <div className={styles.animecard} key={mal_id}>
          {images && <img src={images.jpg.image_url} alt={title} />}
          <h2>{title}</h2>
          <div className={styles.score}>
            <h3>Score: {score}</h3>
            <h3>No. of episodes: {episodes}</h3>
          </div>
          <div className={styles.genre}>
            {genres?.map((e) => (
              <h4>{e.name}</h4>
            ))}
          </div>
          <h3>Producers</h3>
          <div className={styles.genre}>
            {producers?.map((e) => (
              <h4>{e.name}</h4>
            ))}
          </div>

          <p>{synopsis}</p>
          {trailer?.embed_url && (
            <iframe src={trailer.embed_url} frameborder="0"></iframe>
          )}
        </div>
      )}
    </>
  );
}
