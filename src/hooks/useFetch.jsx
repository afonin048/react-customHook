import { useCallback, useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getData = useCallback(async () => {
        try {
            setError(null);
            setIsLoading(true);
            const res = await fetch(url);

            if (!res.ok) {
                throw new Error('Failed to fetch data')
            }

            const data = await res.json();
            setData(data)
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoading(false);
        }
    }, [url]);

    useEffect(() => {
        getData()
    }, [getData])

    return {
        data,
        isLoading,
        error,
        refetch: getData
    }

};

export default useFetch;