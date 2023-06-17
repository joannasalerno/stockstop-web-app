import { useEffect, useState } from "react";

async function getHeadlines(symbol) {    
    const url = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${symbol}&limit=5&sort=LATEST,RELEVANCE&apikey=${process.env.REACT_APP_ALPHAVANTAGE_APIKEY}`

    let res = await fetch(url);
    let data = await res.json();
    let articles = data.feed; // get list of articles

    return articles.map((article) => ({
        title: article.title,
        date: article.time_published.substring(6,8) + "-" + article.time_published.substring(4,6) + "-" + article.time_published.substring(0,4),
        description: article.summary,
        url: article.url,
        source: article.source
    }));
}

export function useNewsArticles(symbol) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [headlines, setHeadlines] = useState([]);

    useEffect(() => {
        getHeadlines(symbol)
            .then((res) => setHeadlines(res))
            .catch((e) => setError(e.message))
            .finally(() => setLoading(false))
    }, [symbol]);

    if (loading) {
        return <p>Loading stock news...</p>;
    }

    if (error) {
        return<p>Something went wrong: {error.message}</p>;
    }

    return {headlines};
}