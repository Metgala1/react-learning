export async function getProducts() {
    const response = await fetch(
        "http://localhost:3000/products"
    )

    return response.json()
}