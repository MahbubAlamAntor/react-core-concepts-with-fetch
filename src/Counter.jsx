import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
    const handleAdd = () =>{
        const newCount = count +1;
        setCount(newCount)
    } 

    const handleRemove = () =>{
        const newCount = count - 1
        setCount(newCount)
    }
    return (
        <div style={{border: '2px solid yellow', padding:'20px'}}>
            <h2>My Counter</h2>
            <h4>Count : {count}</h4>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
} 