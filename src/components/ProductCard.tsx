type ProductCardProps = {
    id: number
    name: string
    price: number
    
}



function ProductCard({name, price , id }: ProductCardProps) {

    return (
        <div key={id}>
            <h2>{name}</h2>
            <p>{price}</p>
        </div>
    )

}

export default ProductCard