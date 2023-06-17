import { useState } from "react";
import { GetSymbolInfo } from "../components/GetSymbolInfo";
import { useStockLogo } from "../components/StockLogo";
import { useNewsArticles } from "../components/StockNews";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

import { Badge } from "react-bootstrap";

export default function News() {
    const [ symbol, setSymbol ] = useState("AAPL");
    const { headlines } = useNewsArticles(symbol);

    const stockLogo = useStockLogo(symbol);
    const icon = <FontAwesomeIcon icon={faNewspaper} size="lg" style={{color: "#52ab98"}}/>

    if(!headlines) {
        return (
            <div className="container">
                <p style={{fontSize: "large"}}>Still loading...</p>
                <p style={{fontSize: "large"}}>
                    <span style={{color: "#8b0000"}}>WARNING:</span>
                    &ensp;If this page takes more than 5 seconds to load, you may have entered an invalid 
                    stock symbol. 
                    <br/>
                    If this occurs, please consult the available stocks table to find 
                    the symbol of the stock you're interested in.
                </p>
            </div>

        );
    }
    
    return (
        <div className="container">
            <h2 className="PageHeader">
                Latest Market News
            </h2>
            <p>
                <i>
                    Type the symbol of a stock in the search bar below to view the most recent
                    news articles mentioning that stock.
                    <br/>
                    You may need to refer back to the table on the available stocks page 
                    to get the symbol of the stock you're interested in.
                    <br/>
                    Clicking on an article headline will link you to that article, which will 
                    open in a new tab in your browser.
                </i> 
            </p>
            <div className="news-wrapper">
                <GetSymbolInfo onSubmit={setSymbol}/>
                {stockLogo}
            </div>
            <br/>
            {headlines.map((headline) => (
                <div>
                    <div>
                        <h5><a href={headline.url} target="_blank">
                            {icon}
                            &nbsp;&nbsp;
                            {headline.title}
                        </a></h5>
                    </div>
                    <h6>
                        <i>Published: </i>
                            <Badge pill bg="success">
                                {headline.date}
                            </Badge>
                        {'\n'}
                        <i>Source: </i>
                            <Badge pill bg="secondary">
                                {headline.source}
                            </Badge>
                    </h6>
                    <p>{headline.description}</p>
                </div>
            ))}
        </div>
    );
}