import React from "react";
import ServiceCard from "../components/ServiceCard";
import ContactForm from "../components/ContactForm";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-base">
      <ServiceCard title="Web Development" />
      <ServiceCard title="Android Development" />
      <ServiceCard title="AI Development" />
      <ContactForm />
    </div>
  );
};

export default Services;
