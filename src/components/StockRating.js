import { useState, useEffect } from 'react';

async function getRating(symbol) {
    const url = `https://financialmodelingprep.com/api/v3/rating/${symbol}?apikey=${process.env.REACT_APP_FMP_APIKEY}`;

    let res = await fetch(url);
    let data = await res.json();

    return data[0].ratingRecommendation;
}

export function useRating(symbol) {
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);
    const [ rating, setRating ] = useState([]);

    useEffect(() => {
        getRating(symbol)
            .then((res) => setRating(res))
	        .catch((error) => setError(error.message))
            .finally(() => setLoading(false));
    }, [symbol]);

    if (loading) {
        return<p>Loading stock rating...</p>;
    }

    if (error) {
        return<p>Something went wrong: {error}</p>;
    }

    return rating;
}

export default useRating;