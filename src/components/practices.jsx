
export function Greeting({isLogged}) {
    // if (isLogged) return <h1>Welcome back</h1>;

    return (
        // <h1>{isLogged ? 'Welcome Back' : 'Please Sign it'}</h1>
        <h1>{isLogged && 'Welcome Back'}</h1>
    )
}

export function DeveloperCard({developer, age, country}) {
    return (
        <div className="card">
            <h1>Developer: {developer}</h1>
            <p>Age: {age}</p>
            <p>Country: {country}</p>
        </div>
    )
}

export function FruitList() {
    const fruits = ['Apple','Banana','Orange','Mango'];

    return (
        <ul>
            {fruits.map((fruit, index) => (
                <li key={`${fruit} - ${index}`}>{fruit}</li>
            ))}
        </ul>
    )
}

export function UserList() {
    const users = [
        {id: 100, name: 'abdukadir', email: 'abdukadir@gmail.com'},
        {id: 101, name: 'jama', email: 'jama@gmail.com'},
        {id: 102, name: 'barre', email: 'barre@gmail.com'}
    ]

    return (
        <ul>
            {users.map((user, index) => (
                <div key={user.id}>
                    <h3>{user.id}: {user.name}</h3>
                    <p>{user.email}</p>
                </div>
            ))}
        </ul>
    )
}



// Card

export function Card({name, title, bio}) {
    return (
        <div className="card">
            <h2>{name}</h2>
            <p className="card-title">{title}</p>
            <p>{bio}</p>
        </div>
    )
}



// Mood Board

export function MoodBoardItem({color, image, description}) {
    return (
        <div style={{
            backgroundColor: color
        }} className="mood-board-item">
            <img src={image} alt="" className="mood-board-image" />
            <h3 className="mood-board-text">{description}</h3>
        </div>
    )
}