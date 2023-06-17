import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import { Badge } from "reactstrap";
import { useNavigate } from "react-router-dom";

export function AvailableStocksList() {

    let navigate = useNavigate();
    const handleRowClick = (event) => {
        console.log('row was clicked:', event.data.symbol);
        navigate(`/available-stocks/stock-info/${event.data.symbol}`);
    };

    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);
    const [ rowData, setRowData ] = useState([]);

    const gridOptions = {
        columnDefs: [
            { 
                headerName: "Symbol",
                id: "symbol", 
                field: "symbol", 
                width: 200,
                filter: true,
                floatingFilter: true,
                sortable: true,
                headerClass: "table-header-column"
            },
            { 
                headerName: "Name",
                id: "name", 
                field: "name", 
                width: 400,
                resizable: true,
                filter: true,
                floatingFilter: true,
                sortable: true,
                headerClass: "table-header-column"
            },
            { 
                headerName: "Sector", 
                id: "sector",
                field: "sector",
                width: 300,
                filter: true,
                floatingFilter: true,
                sortable: true,
                headerClass: "table-header-column"
            }
        ],
        pagination: true,
        paginationPageSize: 15,
        animateRows: true,
        rowSelection: "single"
    };
     
    useEffect(() => {
        fetch(`https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=${process.env.REACT_APP_FMP_APIKEY}`)
            .then(res => res.json())
            .then(data => 
                data.map(stock => {
                    return {
                        symbol: stock.symbol,
                        name: stock.name,
                        sector: stock.sector
                    };
                }))
            .catch((error) => setError(error.message))
            .finally(() => setLoading(false))
        .then(stocks => setRowData(stocks));
    }, []);

    if (loading) {
        return<p>Loading stocks table...</p>;
    }

    if (error) {
        return<p>Something went wrong: {error}</p>;
    }

    return (
        <div>
            <Badge color="success" pill>{rowData.length}</Badge>
            &ensp;Stocks
            <br/>
            <br/>
            <div 
                className="ag-theme-balham"
                style={{
                    height: "500px",
                    width: "70%",
                }}
            >
                <AgGridReact
                    gridOptions={gridOptions}
                    rowData={rowData}
                    onRowClicked={handleRowClick}
                />
            </div>
        </div>
    );
}

export default AvailableStocksList;