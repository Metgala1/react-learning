import { useState } from "react";

function useLocalStorage() {
    const [token , setToken] = useState<string | null>(null)

    setToken(localStorage.getItem("token"))

    return {
        token
    }
}

export default useLocalStorage