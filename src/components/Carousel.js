import Carousel from "react-bootstrap/Carousel";

import nasdaq from "../images/nasdaq.jpeg";
import welcome from "../images/stock-market.jpg";
import news from "../images/news.avif";
import login from "../images/login.jpeg";

function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="carousel-wrapper"
          src={welcome}
          alt="Welcome"
          style={{opacity: 0.80}}
        />
        <Carousel.Caption>
            <div style={{color: "#000000", backgroundColor: "#c8d8e4", opacity: 0.85}}>
                <h3>Welcome to StockStop</h3>
                <p>Where you can easily view information about the top-traded stocks on NASDAQ</p>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-wrapper"
          src={nasdaq}
          alt="Available stocks"
          style={{opacity: 0.80}}
        />
        <Carousel.Caption>
            <div style={{color: "#000000", backgroundColor: "#c8d8e4", opacity: 0.85}}>
                <h3>Available stocks</h3>
                <p>View detailed information on your favorite NASDAQ stocks</p>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-wrapper"
          src={news}
          alt="Stock news"
          style={{opacity: 0.80}}
        />
        <Carousel.Caption>
            <div style={{color: "#000000", backgroundColor: "#c8d8e4", opacity: 0.85}}>
                <h3>Top market news</h3>
                <p>View the most recent news articles on your favorite stocks</p>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-wrapper"
          src={login}
          alt="Sign up"
          style={{opacity: 0.80}}
        />
        <Carousel.Caption>
            <div style={{color: "#000000", backgroundColor: "#c8d8e4", opacity: 0.85}}>
                <h3>StockStop premium</h3>
                <p>Sign up for an account to unlock premium features, such as expert investing advice</p>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;