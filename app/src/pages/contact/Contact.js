import React, { useContext } from "react";

import "./Contact.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

import { FiSend } from "react-icons/fi";

export default function Contact() {
  const { data } = useContext(AppContext);
  return (
    <div className="form-container">
      <form className="form">
        <h2>Contact me</h2>
        <label className="label name-label" htmlFor="name">
          Name:
          <input
            className="input name-input"
            type="text"
            id="name"
            name="name"
            maxLength="30"
            required
            placeholder="Enter your name."
          />
          <p className="error-message">Error msg placeholder</p>
        </label>

        <label className="label email-label" htmlFor="email">
          Email:
          <input
            className="input email-input"
            type="email"
            id="email"
            name="email"
            maxLength="30"
            required
            placeholder="Enter your email."
          />
          <p className="error-message">Error msg placeholder</p>
        </label>

        <label className="label message-label" htmlFor="message">
          Message:
          <textarea
            className="textarea message-input"
            id="message"
            name="message"
            rows="7"
            cols="50"
            maxLength="200"
            required
            placeholder="Enter your message."
          />
          <div className="err-msg-char-limit-ctn">
            <p className="error-message">Error msg placeholder</p>
            <p className="char-limit">0/200</p>
          </div>
        </label>

        <div className="links-button-container">
          <Link target="blank" to={data.links.linkedin}>
            <BsLinkedin />
          </Link>
          <Link target="blank" to={data.links.github}>
            <BsGithub />
          </Link>
          <button className="send-button" type="submit">
            Send
            <FiSend />
          </button>
        </div>

        <p className="confirmation-message">Confirmation msg placeholder</p>
      </form>
    </div>
  );
}
