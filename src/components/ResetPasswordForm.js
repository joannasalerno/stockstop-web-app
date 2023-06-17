import { Button } from "react-bootstrap";

export function ResetPasswordForm() {

    const handleSubmit = event => {
        console.log('handleSubmit ran');
        event.preventDefault();
    }

    return (
        <div className="container">
            <h3 className="PageHeader">
                Reset Your Password
            </h3>
            <hr/>
            <p>
                Enter your email address in the box below and click the 
                button to reset your password.
                <br/>
                <br/>
                If the email address you provide exists in our database, you 
                will receive a message in the next <br/> 15 minutes with a link to 
                reset your password. Check your inbox and spam folders for this. 
                <br/>
                <br/>
                If you do not receive an email, please come back to this page 
                and re-submit your email address.
            </p>
            <form onSubmit={handleSubmit}>
                <label htmlFor='email'>Email address: </label>
                <input 
                    type="email"
                    name="email"
                    id="email"
                    placeholder="someone@example.com"
                    style={{
                        width: "350px",
                        padding: "5px 10px",
                        margin: "20px 10px",
                        marginBottom: "5px"
                    }}
                />
                <Button
                    id="login"
                    type="submit"
                    variant="success"
                >
                    Reset Password
                </Button>
            </form>

        </div>
    );
}