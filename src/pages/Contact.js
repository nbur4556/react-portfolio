import React from 'react';
import '../stylesheets/contact.css';

// Component
import TextBox from '../components/TextBox.js';

const Contact = () => {
    return (
        <section className="contact-page">
            {/* Contact Form */}
            <TextBox>
                <form>
                    <label>Name</label>
                    <input type="text" />
                    <label>Email Address</label>
                    <input type="text" />
                    <label>Message</label>
                    <textarea></textarea>
                    <button type="submit">Submit</button>

                    <p>Note: The contact form does not yet work. Please use the contact details.</p>
                </form>
            </TextBox>

            {/* Contact Details */}
            <section className="contact-details">
                <h2>Contact Details</h2>
                <a href="mailto:nbur4556@gmail.com" target="_blank" rel="noreferrer">nbur4556@gmail.com</a>
                <p>Github - <a href="https://github.com/nbur4556" target="_blank" rel="noreferrer">https://github.com/nbur4556</a></p>
                <p>Linked In - <a href="https://www.linkedin.com/in/nick-burt/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/nick-burt/</a></p>
            </section>
        </section>
    );
}

export default Contact;