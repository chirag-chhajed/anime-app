import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import styles from "../../css/animedetail.module.css";
import axios from "axios";

export default function AnimeDetail() {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  // console.log(id);

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime/${id}/full`
      );
      setDetails(response.data.data);
      setLoader(false);
    });
  }, [id]);

  // console.log(details);

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
  } = details;

  return (
    <>
      {loader && <Loader />}
      {details && (
        <div className={styles.animecard} key={mal_id}>
          {images && <img src={images.jpg.image_url} alt={title} />}
          <h2>{title}</h2>
          <div className={styles.score}>
            <h3>Score: {score}</h3>
            <h3>No. of episodes: {episodes}</h3>
          </div>
          <div className={styles.genre}>
            {genres && genres.map((e) => <h4>{e.name}</h4>)}
          </div>
          <h3>Producers</h3>
          <div className={styles.genre}>
            {producers && producers.map((e) => <h4>{e.name}</h4>)}
          </div>

          <p>{synopsis}</p>
          {trailer && trailer.embed_url && (
            <iframe src={trailer.embed_url} frameborder="0"></iframe>
          )}
        </div>
      )}
    </>
  );
}
