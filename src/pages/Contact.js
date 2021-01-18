import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../stylesheets/contact.css';
import '../stylesheets/contact-responsive.css';

// Component
import TextBox from '../components/TextBox.js';

const Contact = () => {
    const [formResult, setFormResult] = useState();

    const handleSubmitForm = (e) => {
        e.preventDefault();

        // Send email
        emailjs.sendForm('contact_service', 'contact_form', e.target, 'user_TfupibxZhsD5JbWBWN4rn')
            .then(() => {
                handleClearForm("Thank you for contacting me! Your message has been received, and I will reply soon.", e);
            })
            .catch(err => {
                handleClearForm(err.text, e);
            });
    }

    const handleClearForm = (resultMessage, e) => {
        for (let i = 0; i < e.target.children.length; i++) {
            // Clear value if text or textarea
            if (e.target.children[i].type === 'text' || e.target.children[i].type === 'textarea') {
                e.target.children[i].value = null;
            }
        }

        setFormResult(resultMessage);
    }

    return (
        <section className="contact-page">
            {/* Contact Form */}
            <TextBox>
                <form onSubmit={handleSubmitForm}>
                    <label>Name</label>
                    <input type="text" name="from_name" />
                    <label>Email Address</label>
                    <input type="text" name="from_email" />
                    <label>Message</label>
                    <textarea name="message"></textarea>
                    <button type="submit">Submit</button>

                    <p>{formResult}</p>
                </form>
            </TextBox>

            {/* Contact Details */}
            <section className="contact-details">
                <h2>Contact Details</h2>
                <a href="mailto:nbur4556@gmail.com" target="_blank" rel="noreferrer">nbur4556@gmail.com</a>
                <p>Github - <a href="https://github.com/nbur4556" target="_blank" rel="noreferrer">github.com/nbur4556</a></p>
                <p>Linked In - <a href="https://www.linkedin.com/in/nick-burt/" target="_blank" rel="noreferrer">linkedin.com/in/nick-burt/</a></p>
            </section>
        </section>
    );
}

export default Contact;