
export function Greeting({isLogged, name}) {
    return (
        <>
            <h1 style={{fontSize: '20px', fontWeight: 'normal'}}>{isLogged ? <>Welcome Back <span style={{fontWeight: 'bold'}}>{name}</span></> : 'Please Sign it'}</h1>
        </>
    )
}