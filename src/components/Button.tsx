import React, { useState } from 'react'

const ButtonComponent = () => {
    const [count, setCount] = useState<number>(0)

    const handleIncrement = () => {
        setCount(prev => prev + 1)
    }

    const handleDecrement = () => {
        setCount(prev => prev - 1)
    }
    return (
        <>
            <h3>show me count {count}</h3> <br />
            <button style={{ backgroundColor: "green", color: "white", margin: "10px" }} onClick={handleIncrement}>Increment</button>
            <button style={{ backgroundColor: "red", color: "white" }} onClick={handleDecrement}>Decrement</button>
        </>
    )
}

export default ButtonComponent