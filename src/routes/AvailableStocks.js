import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import { AvailableStocksList } from "../components/AvailableStocksList.js";

export default function AvailableStocks() {

    return (
        <div className="container">
            <h2 className="PageHeader">
                Most Actively Traded Stocks on the NASDAQ Exchange
            </h2>
            <p>
                <i>
                    Below is a table of available stocks to explore.
                    All are traded on the NASDAQ exchange in the United States.
                </i>
                <br/>
                <i>
                    Clicking on a specific stock's symbol will send you to a new page, 
                    in which you can view more detailed information on that stock.
                </i>
            </p>
            <AvailableStocksList />
        </div>
    );
}