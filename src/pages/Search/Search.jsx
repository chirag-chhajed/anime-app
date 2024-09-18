import { useDebounce } from "@uidotdev/usehooks";
import { useSearchAnimeQuery } from "../../store/api";
import { useSearchParams } from "react-router-dom";
import AnimeCard from "../../components/AnimeCard";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Get the query parameter as a plain string
  const queryParam = searchParams.get("query") || "";

  // Debounce the queryParam to avoid frequent API calls
  const debouncedValue = useDebounce(queryParam, 1000);

  // Ensure you're passing the debounced value as a plain string to the query
  const { data: searchData } = useSearchAnimeQuery({ query: debouncedValue });

  // Map over search results and display AnimeCard components
  const map = searchData?.map((e) => <AnimeCard {...e} key={e.mal_id} />);

  // Update searchParams when the input changes
  const handleInputChange = (e) => {
    setSearchParams({ query: e.target.value });
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={queryParam}
          onChange={handleInputChange}
          placeholder="Search Anime"
        />
      </form>

      <main>{map}</main>
    </>
  );
}
