import React, { useState, useEffect } from "react";
import axios from "axios";

function ContactForm() {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
    status: "",
  });

  useEffect(() => {
    if (state.status !== "") {
      const timer = setTimeout(() => {
        setState((prev) => ({ ...prev, status: "" }));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [state.status]);

  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(
        "https://formspree.io/f/xeqwdzry",
        { name: state.name, email: state.email, message: state.message },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => {
        setState({
          name: "",
          email: "",
          message: "",
          status: "Thank you for your message!",
        });
      })
      .catch((error) => {
        setState({
          ...state,
          status: "Oops! There was a problem submitting your form",
        });
      });
  };

  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <form
        onSubmit={handleSubmit}
        className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h2 className="mb-4 text-3xl text-center">Contact Me</h2>
        <div className="m-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your Name"
            name="name"
            value={state.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="m-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your Email"
            name="email"
            value={state.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="m-4">
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Your Message"
            name="message"
            value={state.message}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex items-center justify-center m-4">
          <button
            className="text-black py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send
          </button>
          <p>{state.status}</p>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
