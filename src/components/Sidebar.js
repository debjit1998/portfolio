import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from "antd";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

import facebook from "../assets/icons/facebook.svg";
import github from "../assets/icons/github.svg";
import pin from "../assets/icons/pin.svg";
import tie from "../assets/icons/tie.svg";
import profile from "../assets/profile.jpeg";

import resume from "../assets/Debjit Majumder.pdf";

import "./Sidebar.css";

function Sidebar() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    if (email.toLocaleLowerCase() === "majumderdebjit@gmail.com") {
      console.log("Error");
      toast.error("You cannot use this email address!");
      return;
    }
    setLoading(true);
    emailjs
      .sendForm(
        "service_upn2rqd",
        "template_0icxd7t",
        e.target,
        "user_P9xCNSDeKW7wCrtYtYtpR"
      )
      .then(
        (result) => {
          setLoading(false);
          console.log(result.text);
          setName("");
          setSubject("");
          setEmail("");
          setMessage("");
          toast.success("Email sent successfully!");
        },
        (error) => {
          setLoading(false);
          console.log(error.text);
          toast.error("Failed to send email. Please try again later.");
        }
      );
  };

  const showContactForm = () => {
    return (
      <>
        <form className="form-group contact-form" onSubmit={handleSendEmail}>
          <label className="contact-form__label">Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Your name"
            className="form-control"
            required
            autoComplete="off"
          />
          <label className="contact-form__label">Email</label>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Your email"
            className="form-control"
            required
            autoComplete="off"
          />
          <label className="contact-form__label">Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            className="form-control"
            required
          />
          <label className="contact-form__label">Message</label>
          <textarea
            name="message"
            required
            className="form-control contact-form__textarea"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <br />
          <br />
          <button
            type="submit"
            className="btn btn-raised btn-primary btn-block contact-form__button"
            disabled={loading}
          >
            Send Email
          </button>
        </form>
      </>
    );
  };

  return (
    <>
      <div className="app__sidebar">
        <div>
          <img src={profile} alt="avatar" className="sidebar__avatar" />
        </div>
        <div className="sidebar__name">
          Debjit <span>Majumder</span>
        </div>
        <div className="sidebar__item sidebar__title">Web Developer</div>
        <a
          href={resume}
          download="Debjit Majumder.pdf"
          className="sidebar__resume"
        >
          <img src={tie} alt="Icon" className="sidebar__icon" />{" "}
          <span>Download Resume</span>
        </a>

        <figure className="sidebar__social-icons sidebar__item">
          <a href="!#">
            <img
              src={facebook}
              title="facebook"
              alt="facebook"
              className="sidebar__icon"
            />
          </a>
          <a href="!#">
            <img
              title="github"
              src={github}
              alt="github"
              className="sidebar__icon"
            />
          </a>
        </figure>

        <div className="sidebar__location-email">
          <div className="sidebar__location">
            <img src={pin} alt="location" className="sidebar__icon" />
            <span>Durgapur, India</span>
          </div>
          <div className="sidebar__email">majumderdebjit@gmail.com</div>
          <div className="sidebar__phone">8900245728 / 9164510003</div>
        </div>

        <div className="sidebar__contact" onClick={showModal}>
          <Link to="#">Let's Talk</Link>
        </div>
      </div>

      <Modal
        title="Email Me"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="Back" onClick={handleCancel}>
            Back
          </Button>,
        ]}
      >
        {showContactForm()}
      </Modal>
    </>
  );
}

export default Sidebar;
