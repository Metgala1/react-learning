import { memo } from "react"

type ProductCardProps = {
    id: number
    name: string
    price: number
    
}

//use memo says do not rerender a component over though the parent can rerender
//except the value or props in that component changes, get for products
const ProductCard = memo(
function ProductCard({name, price , id }: ProductCardProps) {
    console.log("Product card render")

    return (
        <div key={id}>
            <h2>{name}</h2>
            <p>{price}</p>
        </div>
    )

})

export default ProductCard