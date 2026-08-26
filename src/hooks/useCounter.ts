import { useState } from "react";

function useCounter() {
    const [count , setCount] = useState(0)

    function increase() {
        setCount((prev) => prev + 1)
    }

    function decrease() {
        setCount((prev) => prev - 1)
    }

    return {
        count,
        increase,
        decrease
    }
}

export default useCounter