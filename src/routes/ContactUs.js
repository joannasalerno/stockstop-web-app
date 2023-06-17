import ContactForm from "../components/ContactForm.js";

export default function ContactUs() {
    return (
        <div className="container">
            <h2 className="PageHeader">
                Have a question or comment? Contact us!
            </h2>
            <p>
                We love receiving feedback on how we can better serve you! Thus, we encourage you to 
                reach out with any 
                <br/>
                questions, comments, or concerns! We aim to answer all messages within 2 - 5 business days.
                <br/>
                Check your spam folder if you do not receive a message in your inbox within the next 5 business days.
            </p>
            <ContactForm />
        </div>
    );
}