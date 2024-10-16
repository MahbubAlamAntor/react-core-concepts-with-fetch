import { useEffect, useState } from "react"

export default function () {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])
    return (
        <div>
            <h3>User: {user.length}</h3>
        </div>
    )
}