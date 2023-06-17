import image from "../images/stock-market.jpg";

export default function About() {
    return (
        <div className="container">
                <img src={image} style={{width: "100%", height: "350px", opacity: "0.80"}}></img>
                <div class="text-block">
                    <h2>
                        This is StockStop
                    </h2>
                    <p>
                        The website where you can easily find all kinds of info on US stocks traded on NASDAQ.
                    </p>
                </div>
            <br/>
            <br/>
            <div>
                <h4 class="text-wrapper">
                    Purpose
                </h4>
                <p>
                    Are you new to learning about stocks and exchanges? Then you're in the right place!
                    We know how the stock market and investing can feel very daunting when you're first learning.
                    So, we decided to create this website with stock market novices in mind.
                    <br/>
                    <br/>
                    This is meant to be a helpful resource to anyone who is dipping their toes into learning 
                    about stocks and the stock market, and particularly anyone interested in learning more 
                    about the most actively traded stocks on the NASDAQ exchange in the United States.
                    NASDAQ is the selected exchange, as it is one of the largest stock exchanges in the world.
                    You can view basic description information on stocks, including names, industries, sectors, 
                    and current expert ratings. You can also view data on adjusted stock closing prices over
                    the past month and year. You can even browse the most recent articles mentioning 
                    any chosen stock of interest.
                    <br/>
                    <br/>
                    The goal is that this website communicates basic and important information on these popular
                    stocks in an easily-digestible format. We are hoping that you can use this information 
                    to learn more about different stocks, as well as to help you as you make investment decisions.
                    <br/>
                    <br/>
                    <i>Note: This website was created for IFN666: Web and Mobile Application Development, for
                    the purposes of completion of Assignment 2.</i>
                </p>
            </div>
            <div>
                <h4 class="text-wrapper">
                    Data Sources
                </h4>
                <p>
                    Three APIs were used to fetch the data displayed throughout this website.
                    Clicking on the name of each API provider will direct you to the corresponding
                    website in a new browser tab.
                    <ul>
                        <li>
                            <a href="https://twelvedata.com/" target="_blank">
                                Twelve Data
                            </a>
                        </li>
                        <li>
                            <a href="https://www.alphavantage.co/" target="_blank">
                                Alpha Vantage
                            </a>
                        </li>
                        <li>
                            <a href="https://site.financialmodelingprep.com/" target="_blank">
                                Financial Modeling Prep
                            </a>
                        </li>
                    </ul>
                </p>
            </div>
            <div>
                <h4 class="text-wrapper">
                    Meet the Authors
                </h4>
                <div>
                    <h5>
                        Joanna Salerno
                    </h5>
                    <p>
                        Joanna is a current Master of Data Analytics student at QUT. She is passionate about 
                        using data to tell a story and to drive well-informed and impactful decision-making processes.
                        Though she is new to web and mobile application development, she has thoroughly enjoyed learning.
                        She loves it so much that she may go on to continue to develop and design more websites in the 
                        future, so keep an eye out.
                    </p>
                    <hr/>
                    <h5>
                        Pavan Asopa
                    </h5>
                    <p>
                        Pavan, a Master of Data Analytics student at QUT, was keen to explore Web and Mobile Application 
                        Development to expand his skill set and pursue his interests. Although it initially seemed daunting, 
                        Pavan's persistence and dedication allowed him to overcome the complexity and begin to enjoy the 
                        learning process. As he worked on building the website, Pavan's confidence in his abilities grew, and 
                        he became excited about applying his knowledge to develop innovative applications that can make a 
                        meaningful impact in the world.
                    </p>
                </div>
            </div>
            <h4 class="text-wrapper">
                Thanks for visiting!
            </h4>
        </div>
    )
}