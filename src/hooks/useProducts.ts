import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

type Product = {
    id: number;
    name: string;
    price: number;
};

function useProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const {token} = useAuth()

    useEffect(() => {
        async function getProducts() {
            try {
                console.log(token)
                // 1. Pass the token in the headers object
                const response = await fetch("http://localhost:3000/products", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        // Send the token using the Bearer scheme
                        ...(token ? { Authorization: `Bearer ${token}` } : {}),
                    },
                });

                if (!response.ok) {
                    if (response.status === 401) {
                        throw new Error("Unauthorized. Please log in again.");
                    }
                    throw new Error("An error occurred while fetching products");
                }

                const data = await response.json();
                setProducts(data);
            } catch (err: any) {
                setError(err.message || "Error occurred while fetching products");
            } finally {
                setIsLoading(false);
            }
        }

        getProducts();
    }, []);

    return { products, isLoading, error };
}

export default useProducts;
