import React, { useRef, useState } from 'react';
import emailjs from "emailjs-com";

import { validateEmail } from '../../utils/helpers';

function Contact() {

  //   const form = useRef();

  //   const sendEmail = (e) => {
  //     e.preventDefault();

  //     emailjs.sendForm('service_x3a7kcd', 'template_2qg65tf', form.current, 'user_LmbB7UI6aRptKfQhADu3f')
  //       .then((result) => {
  //           console.log(result.text);
  //       }, (error) => {
  //           console.log(error.text);
  //       });
  //   };

  //   return (
  //     <section class="flex-column flex-center">
  //     <form id="contact-form" ref={form} onSubmit={sendEmail}>
  //       <label>Name</label>
  //       <input type="text" name="from_name" />
  //       <label>Email</label>
  //       <input type="email" name="user_email" />
  //       <label>Message</label>
  //       <textarea name="message" />
  //       <input type="submit" value="Send" />
  //     </form>
  //     </section>
  //   );
  // };

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [resultState, setResultState] = useState('');

  const [visibilityState, setVisibilityState] = useState(true);

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x3a7kcd', 'template_2qg65tf', e.target, 'user_LmbB7UI6aRptKfQhADu3f')
    .then((result) => {
      console.log(`${result.text}, your email has been sent.`);
      setResultState('Thank you, your email has been sent to: cjohnson74.tech@gmail.com');
      setVisibilityState(false)
    }, (error) => {
      console.log(error.text);
    });
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.user_email);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.user_name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.user_name]: e.target.message });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section className="flex-column flex-center">
      <form id="contact-form" onSubmit={sendEmail} style={{visibility: visibilityState ? 'visible' : 'hidden'}}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="from_name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="user_email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit" value="Send">Send To cjohnson74.tech@gmail.com</button>
      </form>
      <p>{resultState}</p>
    </section>
  );
}

export default Contact;
