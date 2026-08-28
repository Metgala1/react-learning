import { useParams } from "react-router-dom"
import useProductById from "../hooks/useProductById"
import ProductCard from "../components/ProductCard"

function ProductDetails() {
    const { id } = useParams()
    const {product , isLoadiing , error} = useProductById(Number(id))

    if(error) {
        return <p>{error}</p>
    }

    if(isLoadiing) {
        return <p>Loading....</p>
    }

    if (!product) {
        return <p>Product not found</p>
    }

    return <ProductCard key={product.id} name={product.name} id={product.id} price={product.price} />
}

export default ProductDetails