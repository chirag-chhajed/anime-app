import AnimeCard from "../../components/AnimeCard";
import { useSelector } from "react-redux";

export default function Favourite() {
  const state = useSelector((state) => state.favourites.value);

  const map = state.map((e) => <AnimeCard key={e.mal_id} {...e} />);
  const display =
    state.length > 0 ? map : <h3>There are no items in Favourite</h3>;

  return <main>{display}</main>;
}
