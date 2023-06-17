import { useState, useEffect } from 'react';

async function getStockDescription(symbol) {
    const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${process.env.REACT_APP_ALPHAVANTAGE_APIKEY}`;

    let res = await fetch(url);
    let data = await res.json();

    return {
        stockName: data.Name,
        sector: data.Sector,
        industry: data.Industry,
        description: data.Description
    };
}

export function useStockDescription(symbol) {
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);
    const [ description, setDescription ] = useState([]);

    useEffect(() => {
        getStockDescription(symbol)
            .then((res) => setDescription(res))
	        .catch((error) => setError(error.message))
            .finally(() => setLoading(false));
    }, [symbol]);

    if (loading) {
        return<p>Loading stock info...</p>;
    }

    if (error) {
        return<p>Something went wrong: {error}</p>;
    }

    return { description };
}