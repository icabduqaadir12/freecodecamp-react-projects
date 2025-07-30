export function DeveloperCard({developer, age, country}) {
    return (
        <div className="card">
            <h1>Developer: {developer}</h1>
            <p>Age: {age}</p>
            <p>Country: {country}</p>
        </div>
    )
}