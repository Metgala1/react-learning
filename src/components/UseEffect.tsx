import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import useProducts from "../hooks/useProducts";
import useFetch from "../hooks/useFetch";


type Product = {
    id: number
    name: string
    price: number
}

function UseEff() {
    // const [products , setProducts] = useState<Product[]>([])
    // const [isLoading , setIsloading] = useState(true)
    // const [error , setError] = useState('')

//how to fetch data from api this is the best way to
//   useEffect(() => {
//     async function getProducts() {
//         try{
//         const response = await fetch(
//             "http://localhost:3000/products"
//         )
//         if(!response.ok) {
//             setError("Error getting products")
//         }

//         const data = await response.json()

//         setProducts(data)
//     }catch(error) {
//         console.error(error)
//         setError("Failed to load products")
//     }finally {
//         setIsloading(false)
//     }
//     }

//     getProducts()
// }, [])

//lets use our customer hook instead 😎
    const {data , error , isLoading} = useFetch<Product[]>("http://localhost:3000/products")

     if(error) {
        return <p>{error}</p>
    }

    if(isLoading) {
        return <p>Loading Products</p>
    }

    if(data?.length === 0) {
        return <p>No products found.</p>
    }
   

    

    return (
        <div>
            {data && data.map((prod) => (
                <ProductCard key={prod.id} id={prod.id} price={prod.price} name={prod.name} />
            ))}
           
        </div> 
    )
}

export default UseEff