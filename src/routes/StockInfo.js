import { useParams } from "react-router-dom";
import { useStockLogo } from "../components/StockLogo";
import { useStockDescription } from "../components/StockDescription";
import { useRating } from "../components/StockRating";
import { useTimeSeries } from "../components/TimeSeriesTable";
import WeeklyClosingsChart from "../components/WeeklyChart";

export default function StockInfo() {
    const {stock} = useParams();
    const logo = useStockLogo(stock);
    const {description} = useStockDescription(stock);
    const rating = useRating(stock);
    const table = useTimeSeries(stock);
    const wChart = WeeklyClosingsChart(stock);

    if (!logo) {
        return<p>Loading stock logo....</p>;
    }

    if (!description) {
        return<p>Loading stock description....</p>;
    }

    if (!table) {
        return<p>Loading time series data...</p>;
    }

    return (
        <div className="container">
            <h2 className="PageHeader">
                Detailed Stock Information
            </h2>
            <div>
                <h4>
                    {logo}
                    &nbsp;&nbsp;
                    {description.stockName}
                </h4>
                <h6>
                    <b>Sector: </b>{description.sector}   |
                    <b>   Industry: </b>{description.industry}
                </h6>
                <p><b>Description: </b>{description.description}</p>
                <p>
                    According to our experts, this stock has a rating of: <b>{rating}</b>.
                    <br/>
                <input
                    type="checkbox"
                    name="checkbox"
                    id="checkbox"
                    style={{
                        marginRight: "5px"
                    }}
                />
                <label for="checkbox"><span style={{color: "#52ab98", fontWeight: "bold"}}>Add</span> to following list</label>
                </p>
            </div>
            <p className="TableHeader">
                <b>Daily Prices For the Past 30 Days</b>
            </p>
            {table}
            <br/>
            <p className="TableHeader">
                <b>52-Week Closing Prices</b>
            </p>
            <div className="chart-wrapper">
                {wChart}
            </div>

        </div>
    );
}