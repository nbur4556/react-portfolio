import React from 'react';
import emailjs from 'emailjs-com';
import '../stylesheets/contact.css';
import '../stylesheets/contact-responsive.css';

// Component
import TextBox from '../components/TextBox.js';

const Contact = () => {
    const sendContactForm = (e) => {
        e.preventDefault();

        console.log(e.target);

        emailjs.sendForm('contact_service', 'contact_form', e.target, 'user_TfupibxZhsD5JbWBWN4rn')
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <section className="contact-page">
            {/* Contact Form */}
            <TextBox>
                <form onSubmit={sendContactForm}>
                    <label>Name</label>
                    <input type="text" name="from_name" />
                    <label>Email Address</label>
                    <input type="text" name="from_email" />
                    <label>Message</label>
                    <textarea name="message"></textarea>
                    <button type="submit">Submit</button>
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