import { useState, useEffect } from "react";
import AnimeCard from "../../components/AnimeCard";

export default function Search() {
  const [value, setValue] = useState("");
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const debounce = setTimeout(() => {
      const fetchData = async () => {
        const response = await fetch(
          `https://api.jikan.moe/v4/anime?q=${value}&r&sfw`
        );
        const data = await response.json();
        setSearchData(data?.data);
        // console.log(searchData);
      };
      fetchData();
    }, 500); // set the delay time to 500ms

    return () => clearTimeout(debounce);
  }, [value]);

  const map = searchData.map((e) => <AnimeCard {...e} key={e.mal_id} />);

  return (
    <>
      <form>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search Anime"
        />
      </form>

      <main>{map}</main>
    </>
  );
}
