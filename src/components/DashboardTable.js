import { Badge } from "reactstrap";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export default function DashboardTable() {

    const rowData = [
        {symbol: "AAPL", name: "Apple Inc", price: "$165.79"},
        {symbol: "CSCO", name: "Cisco", price: "$45.70"},
        {symbol: "MRNA", name: "Moderna", price: "$134.33"},
        {symbol: "PYPL", name: "PayPal", price: "$71.81"},
        {symbol: "NFLX", name: "Netflix", price: "$320.78"},
        {symbol: "ZM", name: "Zoom Video Communications", price: "$62.22"},
        {symbol: "META", name: "Meta Platforms", price: "$233.52"},
        {symbol: "NVDA", name: "Nvidia", price: "$275.62"},
        {symbol: "MSFT", name: "Microsoft", price: "$305.41"},
        {symbol: "DDOG", name: "Datadog", price: "$75.40"},
        {symbol: "TMUS", name: "T-Mobile US", price: "$141.26"},
        {symbol: "WBA", name: "Walgreens Boots Alliance", price: "$31.96"},
    ];

    const columnDefs = [
        { 
            headerName: "Stock Symbol",
            id: "symbol", 
            field: "symbol",
            width: 177,
            sortable: true,
            headerClass: "table-header-column", 
        },
        { 
            headerName: "Stock Name",
            id: "name", 
            field: "name",
            width: 250,
            sortable: true,
            headerClass: "table-header-column", 
        },
        { 
            headerName: "Current Price", 
            id: "price",
            field: "price",
            width: 177,
            sortable: true,
            headerClass: "table-header-column", 
        },
    ];

    return (
        <div 
            className="ag-theme-alpine"
            style={{
                height: "350px",
                width: "95%",
            }}
        >
            <h6>
            <Badge color="success" pill>{rowData.length}</Badge>
            &ensp;Following
            </h6>
            <AgGridReact rowData={rowData} columnDefs={columnDefs} pagination={true}></AgGridReact>
        </div>
    );
}