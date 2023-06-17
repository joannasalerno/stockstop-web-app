import { useState } from "react";
import { Button } from "react-bootstrap";

export function ContactForm() {
    const [firstName, setFirstName] = useState(""); 
    const [surname, setSurname] = useState("");
    const [firstError, setFirstError] = useState(null);
    const [secondError, setSecondError] = useState(null);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = event => {
        console.log("handleSubmit ran");
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='firstName'>First name: </label>
                <input 
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="First name"
                    value={firstName}
                    onChange={(event) => {
                        if(/[0-9]/.test(event.target.value)) {
                            setFirstError("First names should not have numbers!");
                        } else {
                            setFirstError(null);
                        }
                        setFirstName(event.target.value);
                    }}
                    style={{
                        width: "400px",
                        padding: "5px 10px",
                        margin: "20px 10px",
                        marginLeft: "35px",
                        marginBottom: "5px"
                    }}
                    required={true}
                />
                {firstError !== null ? <p>Error: {firstError}</p> : null}
                <br/>
                <label htmlFor='surname'>Surname: </label>
                <input 
                    type="text"
                    name="surname"
                    id="surname"
                    placeholder="Surname"
                    value={surname}
                    onChange={(event) => {
                        if(/[0-9]/.test(event.target.value)) {
                            setSecondError("Surnames should not have numbers!");
                        } else {
                            setSecondError(null);
                        }
                        setSurname(event.target.value);
                    }}
                    style={{
                        width: "400px",
                        padding: "5px 10px",
                        margin: "20px 10px",
                        marginLeft: "45px",
                        marginBottom: "5px"
                    }}
                    required={true}
                />
                {secondError !== null ? <p>Error: {secondError}</p> : null}
                <br/>
                <label htmlFor='email'>Email address: </label>
                <input 
                    type="email"
                    name="email"
                    id="email"
                    placeholder="someone@example.com"
                    value={email}
                    onChange={(event) => {setEmail(event.target.value)}}
                    style={{
                        width: "400px",
                        padding: "5px 10px",
                        margin: "20px 10px",
                        marginBottom: "5px"
                    }}
                    required={true}
                />
                <br/>
                <br/>
                <p>Message:</p>
                <textarea
                    name="message"
                    id="message"
                    placeholder="Type your message here"
                    wrap="hard"
                    rows="4"
                    cols="4"
                    value={message}
                    onChange={(event) => {setMessage(event.target.value)}}
                    style={{
                        width: "400px",
                        height: "150px",
                        padding: "5px 10px",
                        marginTop: "-35px",
                        marginLeft: "115px",
                        marginBottom: "15px"
                    }}
                    required={true}
                >
                </textarea>
                <br/>
                <div>
                    <p style={{fontSize: "large"}}>Overall, how satisfied are you with StockStop?</p>
                    <input type="radio" id="verySatisfied" name="satisfaction" value="5"/>
                    <label for="verySatisfied">&nbsp;Very Satisfied</label>&emsp;
                    <input type="radio" id="satisfied" name="satisfaction" value="4"/>
                    <label for="satisfied">&nbsp;Satisfied</label>&emsp;
                    <input type="radio" id="neutral" name="satisfaction" value="3"/>
                    <label for="neutral">&nbsp;Neutral</label>&emsp;
                    <input type="radio" id="dissatisfied" name="satisfaction" value="2"/>
                    <label for="dissatisfied">&nbsp;Dissatisfied</label>&emsp;
                    <input type="radio" id="veryDissatisfied" name="satisfaction" value="1"/>
                    <label for="veryDissatisfied">&nbsp;Very Dissatisfied</label>
                </div>
                <br/>
                <p style={{fontSize: "large"}}>How likely are you to recommend StockStop to a friend?</p>
                <div>
                    <input type="radio" id="veryLikely" name="recommend" value="5"/>
                    <label for="veryLikely">&nbsp;Very Likely</label>&emsp;
                    <input type="radio" id="likely" name="recommend" value="4"/>
                    <label for="likely">&nbsp;Likely</label>&emsp;
                    <input type="radio" id="neutral" name="recommend" value="3"/>
                    <label for="neutral">&nbsp;Neutral</label>&emsp;
                    <input type="radio" id="unlikely" name="recommend" value="2"/>
                    <label for="unlikely">&nbsp;Unlikely</label>&emsp;
                    <input type="radio" id="veryUnlikely" name="recommend" value="1"/>
                    <label for="veryUnlikely">&nbsp;Very Unlikely</label>
                </div>
                <br/>
                <Button
                    id="sendMessage"
                    type="submit"
                    variant="success"
                    onSubmit={handleSubmit}
                >Send Message</Button>
            </form>
        </div>
    );
}

export default ContactForm;