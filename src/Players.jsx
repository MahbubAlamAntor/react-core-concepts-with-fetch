import { useState } from "react"

export default function () {
    const playersStyle = {
        border: '2px solid pink',
        margin:'20px',
        borderRadius:'20px',
        padding:'20px'
    }
    const [count, setCount] = useState(11);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
    }

    const removePlayers = () =>{
        setCount(count - 1)
        // const newCount = count - 1;
        // setCount(newCount)
    }

    return (
        <div style={playersStyle}>
            <h2>Players : {count}</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={removePlayers}>Remove</button>
        </div>
    )
}