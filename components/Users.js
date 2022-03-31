
const Users = ({users}) => {
    return (
        <ul className="list-group">
            {
            users.map(user => {
                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" key={user.id}>
                        <div>
                            <h5> {user.name}</h5>
                            <p>{user.email}</p>
                        </div>
                        <img src={user.avatar} alt={user.name} style={{borderRadius: '50%'}} />
                    </li>
                })
            }
        </ul> 
    )
}

export default Users;