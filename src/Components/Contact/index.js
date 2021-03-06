import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { validateEmail } from "../../utils/helpers";
import Contact from "../../assets/images/contact-stock-pixabay.png";
// require('dotenv').config();


function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;
  
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("ns-portfolio", "template_ewmmhdr", e.target, "user_fJK4Yc9mwGRrnLMD8yjCB")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <section id="p-light">
      <div className="container">
        <div className="row">
          <div className="col-4" id="border-line">
            <h2 data-testid="h2tag" id="s-light">
              Get in Touch
            </h2>
            <img
              src={Contact}
              alt="Emails being sent, stock from pixabay.com"
              className="contact-img"
            />
          </div>
          <div className="col-8">
            <h2 data-testid="h2tag" id="s-light">
              Contact me
            </h2>
            <form className="contact-form" onSubmit={ sendEmail }>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                  id="p-text"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="exampleFormControlInput1"
                  defaultValue={name}
                  onBlur={handleChange}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                  id="p-text"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  defaultValue={email}
                  onBlur={handleChange}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                  id="p-text"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  defaultValue={message}
                  onBlur={handleChange}
                />
              </div>
              {errorMessage && (
                <div>
                  <p id="error-text">{errorMessage}</p>
                </div>
              )}
              <button
                data-testid="button"
                className="btn btn-secondary"
                type="submit"
                value="Send"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
