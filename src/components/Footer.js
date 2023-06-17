import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    const icon = <FontAwesomeIcon icon={faUser} />
    const date = new Date().getFullYear();

    return (
        <div className="Footer">
            <div>
                <a href = "/signup" style={{color: "#5A5A5A"}}> Sign Up</a>
                &nbsp; | &nbsp;
                <a href = "/contact-stockstop" style={{color: "#5A5A5A"}}>Contact Us</a>
                &nbsp; | &nbsp;
                <a href = "/stockstop-privacy" style={{color: "#5A5A5A"}}>Privacy</a>
            </div>
            <div>
                Created by&nbsp;
                {icon}
                <a href="https://www.linkedin.com/in/joanna-salerno" target="_blank"
                style={{
                    color: "#5A5A5A",
                    marginLeft: "0.25rem"
                    }}>
                    Joanna Salerno
                </a>
                &nbsp;and&nbsp;
                {icon}
                <a href="https://in.linkedin.com/in/pavan-asopa-53a81a106" target="_blank"
                    style={{
                        color: "#5A5A5A", 
                        marginLeft: "0.25rem"
                    }}>
                    Pavan Asopa
                </a>
                &nbsp;&#169;&nbsp;{`${date}`}
            </div>
        </div>
    );
}