import { useState, useEffect } from "react";

const useFetch = (url, updateFlag) => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then((res) => {
                if (res.ok !== true) {
                    throw Error("Error");
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
                setError(null);
            })
            .catch((err) => {
                if (err.name === "AbortError") {
                } else {
                    setError(err.message);
                    setLoading(false);
                }
            });

        return () => {
            abortCont.abort();
        };
    }, [updateFlag]);

    return { data, isLoading, error };
};

export default useFetch;
