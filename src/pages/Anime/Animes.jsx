import AnimeCard from "../../components/AnimeCard";
import { useGetTopAnimeQuery } from "../../store/api";
import { useState } from "react";
import { useEffect } from "react";
// import { useParams } from "react-router-dom"

export default function Animes() {
  const [page, setPage] = useState(1);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((e) => e + 1);
    }
  };
  const { data } = useGetTopAnimeQuery({
    page,
  });

  return (
    <main>
      {data?.map((e) => (
        <AnimeCard key={e.mal_id} {...e} />
      ))}
    </main>
  );
}
