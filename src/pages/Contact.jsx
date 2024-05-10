import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateName,
  updateEmail,
  updateMessage,
  resetForm,
} from "../components/Store";
import StarryBackground from "../components/Stars";
import "../components/ContactForm.css";

const ContactForm = () => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.contactForm);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      alert("The message has been sent!");
      setSubmitted(false);
    }
  }, [submitted]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(resetForm());
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>
        If you have any questions or want to book me for a job, please fill out
        this form
      </h2>
      <input
        type="text"
        placeholder="Your name"
        value={form.name}
        onChange={(e) => dispatch(updateName(e.target.value))}
      />
      <input
        type="email"
        placeholder="my.email@mail.com"
        value={form.email}
        onChange={(e) => dispatch(updateEmail(e.target.value))}
      />
      <textarea
        placeholder="Write your message here"
        value={form.message}
        onChange={(e) => dispatch(updateMessage(e.target.value))}
      />
      <button type="submit">Send away your mail!</button>
      <StarryBackground count={500} />
    </form>
  );
};

export default ContactForm;

// Den här var det absolut svåraste tyckte jag. att verkligen kunna få till, blev mycket felsökande och debugging.
//Det är den här kontaktformuläret som jag implementerat med sån global statehantering med redux och så.
