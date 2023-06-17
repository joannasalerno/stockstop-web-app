import SignUpForm from "../components/SignUpForm";

export default function SignUp() {
    return (
        <div className="container">
            <h2 className="PageHeader">
                Welcome! We're excited to have you join our community.
            </h2>
            <SignUpForm />
        </div>
    );
}