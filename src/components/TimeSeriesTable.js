import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-balham.css";

async function getTimeSeries(symbol) {
    const url = `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1day&apikey=${process.env.REACT_APP_TWELVEDATA_APIKEY}`;
    
    let res = await fetch(url);
    let data = await res.json();
    let values = data.values;

    return values;
}

export function useTimeSeries(symbol) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [values, setValues] = useState([]);
    const [rowData, setRowData] = useState([]);

    const gridOptions = {
        columnDefs: [
            { 
                headerName: "Date",
                id: "date", 
                field: "date",
                sortable: true,
                headerClass: "table-header-column", 
            },
            { 
                headerName: "Opening Price ($USD)",
                id: "open", 
                field: "open",
                headerClass: "table-header-column", 
            },
            { 
                headerName: "High Price ($USD)", 
                id: "high",
                field: "high",
                headerClass: "table-header-column", 
            },
            { 
                headerName: "Low Price ($USD)", 
                id: "low",
                field: "low",
                headerClass: "table-header-column", 
            },
            { 
                headerName: "Closing Price ($USD)", 
                id: "close",
                field: "close",
                headerClass: "table-header-column",
            }
        ],
        pagination: true,
        paginationPageSize: 15,
        animateRows: true,
    };

    useEffect(() => {
        getTimeSeries(symbol)
            .then((res) => {setValues(res); return res})
            .then((data) => 
                data.map(stock => {
                    return {
                        date: stock.datetime,
                        open: stock.open,
                        high: stock.high,
                        low: stock.low,
                        close: stock.close
                    };
                }))
        .then(timeSeries => {setRowData(timeSeries)})
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false))
    }, [symbol]);

    if (loading) {
        return<p>Loading time series data...</p>;
    }

    if (error) {
        return<p>Something went wrong: {error}</p>;
    }

    return (
        <div 
                className="ag-theme-balham"
                style={{
                    height: "300px",
                    width: "76%",
                }}
            >
                <AgGridReact
                    gridOptions={gridOptions}
                    rowData={rowData}
                />
            </div>
    );
}