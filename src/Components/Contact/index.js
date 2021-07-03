import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import Contact from "../../assets/images/contact-stock-pixabay.png";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
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
      <div class="container">
        <div class="row">
          <div class="col-4">
            <h2 data-testid="h2tag" id="s-light">
              Get in Touch
            </h2>
            <img
              src={Contact}
              alt="Emails being sent, stock from pixabay.com"
              height="250px"
              width="350px"
            />
          </div>
          <div class="col-8">
            <h2 data-testid="h2tag" id="s-light">
              Contact me
            </h2>
            <form id="contact-form" onSubmit={handleSubmit}>
              <div class="mb-3">
                <label
                  for="exampleFormControlInput1"
                  class="form-label"
                  id="p-text"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  id="exampleFormControlInput1"
                  defaultValue={name}
                  onBlur={handleChange}
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleFormControlInput1"
                  class="form-label"
                  id="p-text"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  defaultValue={email}
                  onBlur={handleChange}
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleFormControlTextarea1"
                  class="form-label"
                  id="p-text"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  class="form-control"
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
                class="btn btn-secondary"
                type="submit"
                value="send"
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
