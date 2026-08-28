import useFetch from "../hooks/useFetch";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import { useCallback, useMemo, useState } from "react";

type Product = {
    id: number;
    name: string;
    price: number;
};

function Products() {
    const url = "/products";
    const { data, isLoading, error , refetch } = useFetch<Product[]>(url);
    const [count , setCount] = useState(0)

    //Demonstrating useMemo
    //useMemo caches data so that it is not recalculated everytime
    const totalPrice = useMemo(() => {
        return data?.reduce((total, prod) => total + prod.price, 0) ?? 0;
    }, [data]);

    //UseCallback memoizes a function so that it doesnt get created over and over again

    const increase =  useCallback(() => {
        setCount(prev => prev + 1)
    }, [])
       

    if (error) {
        return <p>{error}</p>;
    }
    
    if (isLoading) {
        return <p>Loading ....</p>;
    }

    if (data?.length === 0) {
        return <p>No Products</p>;
    }
    
    return (
        <div>
            {data?.map((prod) => (
                <Link key={prod.id} to={`/products/${prod.id}`}>
                    <ProductCard id={prod.id} name={prod.name} price={prod.price} />
                </Link>
            ))}
            <div>
                 <p>{count}</p>
            </div>
            <p>{totalPrice}</p>

            <button onClick={increase}></button>
            <button onClick={refetch}>Refetch</button>
           
        </div>
    );
}

export default Products;
