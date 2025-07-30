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