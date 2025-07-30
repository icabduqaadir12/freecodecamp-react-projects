import { useEffect, useRef, useState } from "react"

export function FruitsSearch() {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])
    const inputRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
    }


    useEffect(() => {
        inputRef.current?.focus()
        if (query.trim() == ''){
            setResults([])
            return;
        }

        const timeoutId = setTimeout(async () => {
            const response = await fetch(`https://fruit-search.freecodecamp.rocks/api/fruits?q=${query}`)
            const data = await response.json()
            setResults(data.map(fruit => fruit.name))
        }, 700)

        return () => clearTimeout(timeoutId)
    }, [query])

    return (
        <div style={{
            padding: '20px',
            background: 'white',
            borderRadius: '10px',
            textAlign: "center"
        }} id="search-container">
           <form onSubmit={handleSubmit}>
             <label htmlFor="input-search">Search for Fruits: </label>
            <input style={{
                width: '80%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                marginBottom: '20px'
            }} 
            ref={inputRef}
            id="input-search" 
            type="search" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />
           </form>

            <div style={{
                textAlign: "left",
                maxHeight: '150px',
                overflowY: 'auto'
            }}>
                {results.length > 0 ? 
                (results.map((result) => (
                    <p style={{
                        padding: '10px',
                        borderBottom: '1px solid #ddd',
                    }} key={result}>{result}</p>
                ))):
                <p>No results found</p>}
            </div>
        </div>
    )
}