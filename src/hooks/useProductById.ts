import { useState , useEffect } from "react";

type ProductCardProps = {
    id: number
    name: string
    price: number
    
}

function useProductById(id: number) {
    const [product , setProduct] = useState<ProductCardProps>()
    const [isLoadiing, setIsLoading] = useState(true)
    const [error , setError] = useState("") 
    useEffect(() => {
       async function getProduct(id: number) {
            try{
                const response = await fetch(`http://localhost:3000/products/${id}`)
                if(!response.ok) {
                    throw new Error("Failed to fatch product")
                }
                const data = await response.json()
                setProduct(data)

            }catch(error){
               setError("Error occured while retrieving product")

            }finally {
                setIsLoading(false)

            }
        }
        getProduct(id)

    },[])
    return {
        product,
        isLoadiing,
        error
    }
}

export default useProductById