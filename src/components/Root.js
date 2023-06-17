import { NavLink, Outlet } from "react-router-dom";

import Header from "./Header";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

export default function Root() {
    const home = <FontAwesomeIcon icon={faHouseChimney} size="lg"/>
    const stocks = <FontAwesomeIcon icon={faChartLine} size="lg"/>
    const news = <FontAwesomeIcon icon={faNewspaper} size="lg"/>
    const about = <FontAwesomeIcon icon={faCircleQuestion} size="lg"/>
    const login = <FontAwesomeIcon icon={faCircleUser} size="lg"/>

    return (
        <div>
            <div className="header-container">
                <Header />
                <div className="navbar">
                    <ul>
                        <li><NavLink to="/">
                            {home}&nbsp;&nbsp;Home</NavLink></li>
                        <li><NavLink to="/available-stocks">
                            {stocks}&nbsp;&nbsp;Available Stocks</NavLink></li>
                        <li><NavLink to="/stock-news">
                            {news}&nbsp;&nbsp;Stock News</NavLink></li>
                        <li><NavLink to="/about">
                            {about}&nbsp;&nbsp;About Us</NavLink></li>
                        <li><NavLink to="/login">
                            {login}&nbsp;&nbsp;My Account</NavLink></li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </div>
    );
}