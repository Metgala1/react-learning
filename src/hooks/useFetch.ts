import { useState, useEffect, useCallback } from "react";

function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async (signal?: AbortSignal) => {
        setIsLoading(true);
        setError(null);

        try {                
            const token = localStorage.getItem("token");

            const response = await fetch(`http://localhost:3000${url}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    ...(token ? { Authorization: `Bearer ${token}` } : {}),
                },
                signal,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const result = await response.json();
            setData(result);
        } catch (err: any) {
            if (err.name !== "AbortError") {
                setError(err.message || "An error occurred");
            }
        } finally {
            setIsLoading(false);
        }
    }, [url]);

    useEffect(() => {
        const controller = new AbortController();
        
        fetchData(controller.signal);

        return () => {
            controller.abort();
        };
    }, [fetchData]);

    return {
        data,
        isLoading,
        error,
        refetch: () => fetchData(),
    };
}

export default useFetch;
