import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    const icon = <FontAwesomeIcon icon={faMoneyBillTrendUp} style={{color: "#f2f2f2"}}/>

    return (
        <div className="Header">
            <h1>
                {icon}
                <a 
                    href='/' 
                    style={{
                        marginLeft: "0.5rem",
                        color: "#f2f2f2"
                    }}
                >StockStop</a>
            </h1>
            <p className="Slogan">
                &nbsp;&nbsp;Your one-stop shop for all info on the top-traded stocks on NASDAQ
            </p>    
        </div>
    );
}