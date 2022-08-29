import { useState } from "react"

const Count = () => {
    const [count, setCount] = useState(0)

    const increaseCount = () => setCount(count + 1)

    const decreaseCount = () => setCount(count - 1)
  return (
    <>
    <h2>Count: {count}</h2>
    <button className="btn btn-warning me-5" onClick={decreaseCount}>Decrease</button>
    <button className="btn btn-primary" onClick={increaseCount}>Increase</button>
    </>
  )
}

export default Count