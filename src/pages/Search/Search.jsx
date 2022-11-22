import { useContext } from "react"
import { Context } from "../../context/Context"
import AnimeCard from "../../components/AnimeCard"
import Loader from "../../components/Loader"
export default function Search() {
    const { value, setValue, searchData, setSearchData, searchPageLoad } = useContext(Context)
    // console.log(value)
    const map = searchData.map((e) => (
        <AnimeCard {...e} key={e.mal_id} />
    ))

    return (
        <>

            <input
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
                onClick={() => setSearchData([])}
                placeholder="Type your todo"
            />
            <main>
                {map}
            </main>

        </>
    )

}