import { useState , useEffect } from "react";

type Product = {
    id: number
    name: string
    price: number
}

function useProducts() {
    const [products , setProducts] = useState<Product[]>([])
    const [isLoading , setIsloading] = useState(true)
    const [error , setError] = useState("")

    useEffect(() => {
        async function getProducts() {
            try{
            const response = await fetch("http://localhost:3000/products")

            if(!response.ok) {
                throw new Error("An error occured while fetching products")
            }

            const data = await response.json()
            setProducts(data)
             }catch(error) {
                setError("Error occured while fetching products")
             }finally{
                setIsloading(false)
             }
        }
        getProducts()

    },[])
    return {products , isLoading , error}
}

export default useProducts