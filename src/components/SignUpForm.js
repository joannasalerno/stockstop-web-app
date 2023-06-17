import { useState } from 'react';
import { Button } from 'react-bootstrap';

export function SignUpForm() {
    const [firstName, setFirstName] = useState(""); 
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstError, setFirstError] = useState(null);
    const [secondError, setSecondError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);

    const handleSubmit = event => {
        console.log('handleSubmit ran');
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
                            setFirstError("First names should not have numbers.");
                        } else {
                            setFirstError(null);
                        }
                        setFirstName(event.target.value);
                    }}
                    style={{
                        width: "350px",
                        padding: "5px 10px",
                        margin: "20px 10px",
                        marginLeft: "35px",
                        marginBottom: "5px"
                    }}
                    required={true}
                />
                {firstError !== null ? <p style={{color: "#FF0000"}}>Error: {firstError}</p> : null}
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
                            setSecondError("Surnames should not have numbers.");
                        } else {
                            setSecondError(null);
                        }
                        setSurname(event.target.value);
                    }}
                    style={{
                        width: "350px",
                        padding: "5px 10px",
                        margin: "20px 10px",
                        marginLeft: "45px",
                        marginBottom: "5px"
                    }}
                    required={true}
                />
                {secondError !== null ? <p style={{color: "#FF0000"}}>Error: {secondError}</p> : null}
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
                        width: "350px",
                        padding: "5px 10px",
                        margin: "20px 10px",
                        marginBottom: "5px"
                    }}
                    required={true}
                />
                <br/>
                <label htmlFor='password'>Password: </label>
                <input 
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => {
                        if(/ /.test(event.target.value)) {
                            setPasswordError("Passwords cannot contain spaces.");
                        } else {
                            setPasswordError(null);
                        }
                        setPassword(event.target.value);
                    }}
                    style={{
                        width: "350px",
                        padding: "5px 10px",
                        margin: "20px 10px",
                        marginLeft: "41px",
                        marginBottom: 0
                    }}
                    required={true}
                />
                {passwordError !== null ? <p style={{color: "#FF0000"}}>Error: {passwordError}</p> : null}
                <br/>
                <br/>
                <input
                    type="checkbox"
                    name="checkbox"
                    id="checkbox"
                    style={{
                        marginRight: "5px"
                    }}
                    required={true}
                />
                <label for="checkbox">I have read and agree to the terms and conditions.</label>
                <br/>
                <br/>
                <Button
                    id="login"
                    type="submit"
                    variant="success"
                    onSubmit={handleSubmit}
                >Sign Up</Button>
            </form>
        </div>
    );
}

export default SignUpForm;