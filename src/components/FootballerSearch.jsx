import { useEffect, useState } from "react"
import { useDebounce } from "./useDebounce"
import footballers from "./footballers"

const FootballerSearch = () => {
    const [query, setQuery] = useState('')
    const debouncedQuery = useDebounce(query, 2000)

    useEffect(() => {
        if (debouncedQuery){
            const results = footballers.filter((footballer) => footballer.toLocaleLowerCase().includes(debouncedQuery.toLocaleLowerCase()),
            );
            console.log('Serach results: ', results);
        }else{
            console.log('Serach results: []');
        }
    }, [debouncedQuery])

    return (
        <>
            <h1>Footballer Search Apps</h1>
            <div>
                <input 
                value={query} 
                type="text"
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a footballer....."
                />
            </div>
        </>
    )
}




export default FootballerSearch