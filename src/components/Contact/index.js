import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import gif from "../../assets/gif/starwars.gif";

import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [resultState, setResultState] = useState("");

  const [buttonActivityState, setButtonActivityState] =
    useState("disabled-button");

  const [visibilityState, setVisibilityState] = useState(true);

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x3a7kcd",
        "template_2qg65tf",
        e.target,
        "user_LmbB7UI6aRptKfQhADu3f"
      )
      .then(
        (result) => {
          console.log(`${result.text}, your email has been sent.`);
          setResultState(
            "Thank you, your email has been sent to: cjohnson74.tech@gmail.com.\nHe will get back with you shortly."
          );
          setVisibilityState(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case "user_email":
        const isValid = validateEmail(e.target.user_email);
        if (!isValid) {
          setErrorMessage("Your email is invalid...");
          setButtonActivityState("disabled-button");
        } else {
          setErrorMessage("");
        }
        break;
      case "from_name":
        if (!e.target.value.length) {
          setErrorMessage("Your name is required to send a message.");
          setButtonActivityState("disabled-button");
        } else {
          setErrorMessage("");
        }
        break;
      case "message":
        if (!e.target.value.length) {
          setErrorMessage("Don't be shy, write a message!");
          setButtonActivityState("disabled-button");
        } else {
          setErrorMessage("");
        }
        break;
      default:
        break;
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.user_name]: e.target.message });
      console.log("Handle Form", formState);
      setButtonActivityState("active-button");
    }
  };

  return (
    <section className="flex-column flex-center my-5">
      {visibilityState ? (
        <form
          id="contact-form"
          onSubmit={sendEmail}
          style={{ visibility: visibilityState ? "visible" : "hidden" }}
        >
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
          <button type="submit" value="Send" className={buttonActivityState}>
            Send To cjohnson74.tech@gmail.com
          </button>
        </form>
      ) : (
        <div style={{width: '70%', height: '30%'}}>
          <img
            style={{
              width: '100%',
              visibility: visibilityState ? 'hidden' : 'visible',
            }}
            src={gif}
            alt='star wars'
          />
          <p style={{textAlign: 'center'}}>{resultState}</p>
        </div>
      )}
    </section>
  );
}

export default Contact;
