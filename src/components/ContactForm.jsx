import "./ContactForm.css"
import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'

const ContactForm = () => {
    const form = useRef();
    const [enviado, setEnviado] = useState(false);
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_75hxm2d', 'template_vud93ic', form.current, 'o4P7u8u4sJRhc8SgD')
        .then((result) => {
            console.log(result.text);
            setEnviado(true);
        }, (error) => {
            console.log(error.text);
        });
    };

    return(
        <div className="form-container">
            <h1>Send a message to us!</h1>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder="Name" required />
                <input type="email" name='email' placeholder="Your Email" required />
                <input type="subject" name='subject' placeholder="Subject" />
                <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                <button type='submit'>Send Message</button>
            </form>
            {enviado && <p className="confirmation-message">Message sent successfully. Thank You!</p>}
        </div>
    )
}
export default ContactForm