export function FruitList() {
    const fruits = ['Apple','Banana','Orange','Mango'];

    return (
        <ul>
            {fruits.map((fruit, index) => (
                <li style={{
                    marginTop: '10px',
                    fontSize: '18px'
                }} key={`${fruit} - ${index}`}>{fruit}</li>
            ))}
        </ul>
    )
}