import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export function GetSymbolInfo(props) {
    const [ symbol, setSymbol ] = useState("");
    const icon = <FontAwesomeIcon icon={faSearch} size="lg"/>

    return (
        <div className="search">
            <input
                aria-labelledby="symbol-search"
                name="symbol-search"
                id="symbol-search"
                type="search"
                placeholder="Type symbol here (ex: AAPL)"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
                style={{width: "250px"}}
            />
            <button
                id="symbol-search"
                type="button"
                onClick={() => props.onSubmit(symbol)}
            >{icon}</button>
        </div>
    );
}

export default GetSymbolInfo;