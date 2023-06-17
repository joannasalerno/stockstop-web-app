import DashboardChart from "../components/DashboardChart";
import DashboardTable from "../components/DashboardTable";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';

export default function Dashboard() {
    const fullDate = "05-05-2023";

    const marketStatus = "OPEN";

    const messageIcon = <FontAwesomeIcon icon={faMessage} size="lg" style={{color: "#52ab98"}}/>

    return (
        <div className="container">
            <div>
                <h2 className="PageHeader">
                    Welcome to your StockStop dashboard.
                </h2>
                <p style={{fontSize: "larger", color: "#2b6777"}}>
                    Today's date: <span style={{color: "#52ab98", fontWeight: "bolder"}}>{fullDate}</span> &ensp;|&ensp;
                    The market is currently <span style={{color: "#52ab98", fontWeight: "bolder"}}>{marketStatus}</span>
                </p>
            </div>
            <hr/>
            <div className="dash-wrapper">
                <div className="griditem1">
                    <p style={{
                        color: "#2b6777", 
                        fontSize: "large", 
                        fontWeight: "bolder", 
                        textAlign: "center"}}
                    >Your Followed Stocks Sectors</p>
                    <DashboardChart />
                </div>
                <div className="griditem2">
                    <p style={{
                        color: "#2b6777", 
                        fontSize: "large", 
                        fontWeight: "bolder", 
                        textAlign: "center"}}
                    >Your Followed Stocks List</p>
                    <DashboardTable />
                </div>
                <div className="griditem3">
                    <p style={{
                        color: "#2b6777", 
                        fontWeight: "bolder", 
                        fontSize: "larger", 
                        textAlign: "center"}}
                    >Looking for expert investing advice?</p>
                    <p className="chat-wrapper"
                        style={{ 
                            fontSize: "medium", 
                            textAlign: "center"}}
                    >Click here to initiate a chat and receive investing insights
                        &ensp;{messageIcon}</p>
                </div>
            </div>
        </div>
    );
}