import React, { useState } from "react";
import { StyledBookAppointment } from "./BookAppointment.styles";
import img from "../../../public/assets/images/user.svg";
import edit from "../../../public/assets/images/edit.svg";
import email from "../../../public/assets/images/email.svg";
import appointment from "../../../public/assets/images/appointmentBg.jpg";
import Input from "../TextField";
import Image from "next/image";
import Button from "../Button";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: !value.trim() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((field) => {
      if (!formData[field].trim()) {
        isValid = false;
        newErrors[field] = true;
      }
    });

    setErrors(newErrors);

    if (isValid) {
      console.log("Form Submitted:", formData);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        description: "",
      });
    }
  };
  return (
    <StyledBookAppointment>
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <strong className="title">Book an Appointment</strong>
          <div className="combine-fields">
            <Input
              placeholder="Full Name"
              name="name"
              value={formData.name}
              error={errors.name}
              onChange={handleChange}
              hasIcon={<Image src={img} alt="icon" />}
            />
          </div>
          <div className="combine-fields">
            <Input
              placeholder="Email Address"
              name="email"
              value={formData.email}
              error={errors.email}
              onChange={handleChange}
              hasIcon={<Image src={email} alt="icon" />}
            />
          </div>
          <div className="combine-fields">
            <Input
              placeholder="Phone"
              name="phone"
              value={formData.phone}
              error={errors.phone}
              onChange={handleChange}
              hasIcon={<Image src={img} alt="icon" />}
            />
            <Input
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              error={errors.subject}
              onChange={handleChange}
              hasIcon={<Image src={edit} alt="icon" />}
            />
          </div>
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className={errors.description ? "error-border" : ""}
          ></textarea>
          <Button width={"100%"}>Book Now</Button>
        </form>
        <div className="image-wrapper">
          <Image src={appointment} alt="appointment" />
        </div>
      </div>
    </StyledBookAppointment>
  );
};

export default BookAppointment;
