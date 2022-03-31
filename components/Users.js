
const Users = ({users}) => {
    return (
        <ul className="list-group">
            {
            users.map(user => {
                    <li className="list-group-item list-group-item-action" key={user.id}>
                        <h5> {user.name}</h5>
                        <p>{user.email}</p>
                    </li>
                })
            }
        </ul> 
    )
}

export default Users;