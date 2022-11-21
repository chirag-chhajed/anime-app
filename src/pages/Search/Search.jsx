import { useContext } from "react"
import { Context } from "../../context/Context"

export default function Search(){
    const {value,setValue,searchData,setSearchData} = useContext(Context)
    // console.log(value)
    const map = searchData.map((e,i) => (
        <h2 key={i}>{e.title}</h2>
    ))
    
    return(
        <>
            
            <input 
                type="text"
                value={value}
                onChange={e=>setValue(e.target.value)}
                onClick={()=>setSearchData([])}
                placeholder="Type your todo"
            />
            <main>
                {map}
            </main>
        
        </>
    )
    
}