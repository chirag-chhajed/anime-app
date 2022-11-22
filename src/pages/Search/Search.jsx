import { useContext } from "react"
import { Context } from "../../context/Context"
import AnimeCard from "../../components/AnimeCard"
export default function Search() {
    const { value, setValue, searchData, setSearchData, searchPageLoad } = useContext(Context)
    const map = searchData.map((e) => (
        <AnimeCard {...e} key={e.mal_id} />
    ))

    return (
        <>
            <form action="">
                <input
                    type="text"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    onClick={() => setSearchData([])}
                    placeholder="Search Anime"
                />
            </form>



            <main>

                {map}
            </main>

        </>
    )

}