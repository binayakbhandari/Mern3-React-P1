import { useState } from "react";

function UseState() {
    const [count, setCount] = useState(0)
    function increaseCount() {
        setCount(count+1)
    }

    const decreaseCount = () => {
        setCount(
            count-1
        )
    }

    return (
        <>
        <h1>UseState</h1>
            <h2> {count} </h2>
            <button onClick={increaseCount}> + </button>
            <button onClick={decreaseCount}> - </button>
        </>
    )
}

export default UseState