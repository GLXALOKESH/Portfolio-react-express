import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeForm } from "../redux/contactFormSlice";
import "./ContactForm.css";

const ContactForm = () => {
  const isOpen = useSelector((state) => state.contactForm.isOpen);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleClose = () => {
    dispatch(closeForm());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const url =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfrxHV8867Hl8kEig1NI5Tj78eq1F7LPMc2AOeYXGZK-RuxDw/formResponse";
    const data = new FormData();
    data.append("entry.1553184187", formData.name);
    data.append("entry.2118129293", formData.email);
    data.append("entry.1132817887", formData.message);

    try {
      fetch(url, {
        method: "POST",
        body: data,
        mode: "no-cors"
      });
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
      handleClose();
    } catch (error) {
      console.error("Error while submitting the form: " + error);
    }
  };


  return (
    <>
    <div
      className={`comp-contactform-overlay ${isOpen ? "" : "hidden"}`}
      onClick={handleClose}
    >
    </div>

      <div
        className={`comp-contactform-container ${isOpen ? "" : "hidden"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="comp-contactform-header">
          <h2 className="comp-contactform-title">Contact Us</h2>
          <button
            className="comp-contactform-close-button"
            onClick={handleClose}
          >
            &times;
          </button>
        </div>
        <form className="comp-contactform-form" onSubmit={handleSubmit}>
          <div className="comp-contactform-field">
            <label className="comp-contactform-label" htmlFor="name">
              Name
            </label>
            <input
              className="comp-contactform-input"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="comp-contactform-field">
            <label className="comp-contactform-label" htmlFor="email">
              Email
            </label>
            <input
              className="comp-contactform-input"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="comp-contactform-field">
            <label className="comp-contactform-label" htmlFor="message">
              Message
            </label>
            <textarea
              className="comp-contactform-textarea"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
          </div>
          <button className="comp-contactform-submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
</>
  );
};

export default ContactForm;
