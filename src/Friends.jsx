import { useEffect, useState } from "react"
import Friend from "./Friend";
import './Friends.css'

export default function () {
    const [friends, setFriend] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriend(data))
    }, [])
    return ( 
        <div>
            <h3>Friend {friends.length}</h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}