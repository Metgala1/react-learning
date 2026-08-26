import { useState , useEffect } from "react";

function useFetch<T>(url: string) {
    const [data , setData] = useState<T | null>(null)
    const [isLoading , setIsLoading] = useState(true)
    const [error , setError] = useState("")

    useEffect(() => {
        async function fetchData() {
            try{
            const response = await fetch(url)

            if(!response.ok) {
                throw new Error("Error occured while fetching data")
            }
            const data = await response.json()
            setData(data)
            }catch(error) {
                setError("An Error occured")
            }finally {
                setIsLoading(false)
            }
        }
        fetchData()

    },[url])

    return {
        data,
        isLoading,
        error
    }
}

export default useFetch