import { useState, useEffect } from 'react';

async function getStockLogo(symbol) {
    const url = `https://api.twelvedata.com/logo?symbol=${symbol}&apikey=${process.env.REACT_APP_TWELVEDATA_APIKEY}`;

    let res = await fetch(url);
    let data = await res.json();
    let logo = data.url;

    return logo;
}

export function useStockLogo(symbol) {
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);
    const [ logo, setLogo ] = useState("");

    useEffect(() => {
        getStockLogo(symbol)
            .then((res) => setLogo(res))
	        .catch((error) => setError(error.message))
            .finally(() => setLoading(false));
    }, [symbol]);

    if (loading) {
        return<p>Loading stock image...</p>;
    }

    if (error) {
        return<p>Something went wrong: {error}</p>;
    }

    return (
        <img src={logo} width="50" height="50"></img>
    );
}