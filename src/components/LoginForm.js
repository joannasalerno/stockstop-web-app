import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export function LoginForm() {
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(null); 

    let navigate = useNavigate();

    const handleSubmit = event => {
        console.log("handleSubmit ran");
        event.preventDefault();
        navigate("/dashboard");
    }

    const resetPassword = () => {
        navigate("/reset-password");
    }

    const handleClick = () => {
        navigate("/signup");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                {passwordError !== null ? <p style={{color: "#FF0000"}}>{passwordError}</p> : null}
                <p 
                    style={{
                        color: "gray",
                        marginLeft: "160px"}}
                >Forgot your password? Click
                    <a 
                        onClick={resetPassword}
                        style={{color: "#52ab98"}}
                    > here </a>
                to reset.
                </p>
                <br/>
                <input
                    type="checkbox"
                    name="checkbox"
                    id="checkbox"
                    style={{
                        marginRight: "5px"
                    }}
                />
                <label for="checkbox">Remember me</label>
                <br/>
                <br/>
                <p>
                    Don't already have an account?
                    <a 
                        onClick={handleClick}
                        style={{color: "#52ab98"}}
                    > Sign up here.</a>
                </p>
                <Button
                    id="login"
                    type="submit"
                    variant="success"
                    onSubmit={handleSubmit}
                >Login</Button>
            </form>
        </div>
    );
}

export default LoginForm;