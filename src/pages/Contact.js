import React from 'react';

// Component
import TextBox from '../components/TextBox.js';

const Contact = () => {
    return (
        <section>
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
            <section>
                <h2>Contact Details</h2>
                <p>Email - nbur4556@gmail.com</p>
                <p>Github - https://github.com/nbur4556</p>
                <p>Linked In - https://www.linkedin.com/in/nick-burt/</p>
            </section>
        </section>
    );
}

export default Contact;