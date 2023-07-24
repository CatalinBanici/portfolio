import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

import "./Contact.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

import { FiSend } from "react-icons/fi";
import { BsCheckLg } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

export default function Contact() {
  const { data } = useContext(AppContext);
  const [confirmationMessage, setConfirmationMessage] = useState("");

  // todo: add dynamic value to character limits in input fields

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required."),
      email: Yup.string().email("Invaild email").required("Required"),
      message: Yup.string().required("Required."),
    }),
    onSubmit: (values, actions) => {
      console.log(values);
      emailjs
        .send(
          process.env.REACT_APP_SERVICE_KEY,
          process.env.REACT_APP_TEMPLATE_KEY,
          values,
          process.env.REACT_APP_API_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            actions.resetForm();
            setConfirmationMessage("success");
            formik.setSubmitting(false);
          },
          (error) => {
            console.log(error.text);
            setConfirmationMessage("failed");
            formik.setSubmitting(false);
          }
        );
    },
  });

  return (
    <div className="form-container">
      <form className="form" onSubmit={formik.handleSubmit}>
        <h2>Contact me</h2>
        <label className="label name-label" htmlFor="name">
          Name:
          <input
            className={
              formik.errors.name && formik.touched.name
                ? "input name-input-error"
                : "input name-input"
            }
            type="text"
            id="name"
            name="name"
            maxLength="30"
            placeholder="Enter your name."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name && (
            <p className="error-message">{formik.errors.name}</p>
          )}
        </label>

        <label className="label email-label" htmlFor="email">
          Email:
          <input
            className={
              formik.errors.email && formik.touched.email
                ? "input email-input-error"
                : "input email-input"
            }
            type="email"
            id="email"
            name="email"
            maxLength="30"
            placeholder="Enter your email."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && (
            <p className="error-message">{formik.errors.email}</p>
          )}
        </label>

        <label className="label message-label" htmlFor="message">
          Message:
          <textarea
            className={
              formik.errors.message && formik.touched.message
                ? "textarea message-input-error"
                : "textarea message-input"
            }
            id="message"
            name="message"
            rows="7"
            cols="50"
            maxLength="300"
            placeholder="Enter your message."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
          <div className="err-msg-char-limit-ctn">
            {formik.errors.message && formik.touched.message && (
              <p className="error-message">{formik.errors.message}</p>
            )}
            <p className="char-limit">{formik.values.message.length}/300</p>
          </div>
        </label>

        <div className="links-button-container">
          <Link target="blank" to={data.links.linkedin}>
            <BsLinkedin />
          </Link>
          <Link target="blank" to={data.links.github}>
            <BsGithub />
          </Link>
          {!formik.isSubmitting ? (
            <button className="send-button" type="submit">
              Send
              <FiSend />
            </button>
          ) : (
            <button className="send-button" disabled>
              Sending... <span className="loader"></span>
            </button>
          )}
        </div>
        {confirmationMessage === "success" ? (
          <p className="confirmation-message-success">
            <BsCheckLg /> <span>Message sent successfully!</span>
          </p>
        ) : null || confirmationMessage === "failed" ? (
          <p className="confirmation-message-failed">
            <RxCross2 /> <span>Something went wrong!</span>
          </p>
        ) : null}
      </form>
    </div>
  );
}
