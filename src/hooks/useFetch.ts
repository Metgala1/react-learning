import { useState, useEffect } from "react";

function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {                
                const token =  localStorage.getItem("token");

                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        ...(token ? { Authorization: `Bearer ${token}` } : {}),
                    },
                });

                if (!response.ok) {
                    throw new Error("Error occurred while fetching data");
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError("An Error occurred");
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, [url]);

    return {
        data,
        isLoading,
        error,
    };
}

export default useFetch;
