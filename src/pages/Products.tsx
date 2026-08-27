import useFetch from "../hooks/useFetch"
import ProductCard from "../components/ProductCard"
import { Link } from "react-router-dom"

type Product = {
    id: number
    name: string
    price: number
}

function Products() {
    const url = "http://localhost:3000/products"
    const {data , isLoading , error} = useFetch<Product[]>(url)

    if(error) {
        return <p>{error}</p>
    }
    
    if(isLoading) {
        return <p>Loading ....</p>
    }

    if(data?.length === 0) {
        return <p>No Products</p>
    }
    
    return (
        <div>
            {data?.map((prod) => (
                <Link key={prod.id} to={`/products/${prod.id}`}>
                <ProductCard  id={prod.id} name={prod.name} price={prod.price} />
                </Link>
            ))}
        </div>
    )
}

export default Products