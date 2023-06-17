import { useNavigate } from "react-router-dom";

export default function Privacy() {

    let navigate = useNavigate();

    const handleClick = () => {
        navigate("/contact-stockstop")
    }

    return (
        <div className="container">
            <div>
                <h2 className="PageHeader">
                    Privacy at StockStop
                    <hr/>
                </h2>
                <p>
                    StockStop cares about your right to privacy. We want all users to trust that any information
                    they provide to us will remain safe. 
                    <br/>
                    When you create an account on StockStop, any personal 
                    information you provide is encrypted and stored in a secure database.
                    <br/>
                    <br/>
                    We are diligent in collecting and managing user data according to the standards set by 
                    the
                        <a href="https://www.legislation.qld.gov.au/view/html/inforce/current/act-2009-014" target="_blank">
                            &nbsp;Information Privacy Act of 2009
                        </a>
                    .
                    <br/>
                    <br/>
                    StockStop only asks for the smallest amount of sensitive data required for you to create a user account.
                    Please be diligent in 
                    <br/>
                    using a unique password for your account, and know that StockStop will <i>never</i> ask for personal information over the phone or via email.
                    <br/>
                    <br/>
                    If you suspect that your account has been hacked, please
                        <a onClick={handleClick} style={{color: "#2b6777"}}>
                            &nbsp;contact us&nbsp;
                        </a>
                    to investigate and reset your password.
                </p>
            </div>
        </div>
    );
}