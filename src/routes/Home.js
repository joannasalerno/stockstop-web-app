import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons';
import HomeCarousel from '../components/Carousel';

export default function Home() {
    const icon = <FontAwesomeIcon icon={faMoneyBillTrendUp} size="lg" style={{color: "#5A5A5A"}}/>

    return (
        <div className="container">
            <div>
            <h2 className="PageHeader" style={{fontSize: "xx-large"}}>
                {icon}
                &nbsp;Welcome to StockStop
            </h2>
                <p style={{fontSize: "larger"}}>Your one-stop shop for all info on the top-traded stocks on NASDAQ</p>
            </div>
            <div className='container'>
                <HomeCarousel />
            </div>
            <br/>
            <p style={{fontSize: "large"}}>
                Here, you can view information on the common stocks traded in the United States,
                on the NASDAQ exchange. NASDAQ stands for the National Association of Securities Dealers 
                Automated Quotations. Click
                    <a href="https://www.nasdaq.com/about" target="_blank" style={{color: "#52ab98"}}>
                        &nbsp;here&nbsp;
                    </a>
                to learn more about NASDAQ.
            </p>
        </div>
    );
}