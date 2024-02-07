// Contact.js

import React, { useState, useRef } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const name = form.current.name.value;
    const email = form.current.email.value;
    const subject = form.current.subject.value;
    const message = form.current.message.value;

    if (!name || !email || !subject || !message) {
      // Display an error message if any of the fields are empty
      toast.error("Please fill in all fields.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    // If all fields have values, proceed with sending the email
    emailjs
      .sendForm(
        "service_xdx999q",
        "template_h3b5afj",
        form.current,
        "Vhlc_EIfChq4oDLyZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Display success message
          toast.success("Email Sent successfully!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          // Reset the form after successful submission
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          // Display error message
          toast.error("Error sending email. Please try again later.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      );
  };
  return (
    <section className="contact py-5">
      <ToastContainer />

      <div
        className="container mx-auto bg-gray-50 px-5 py-5 md:py-20 md:px-20 rounded-xl "
        style={{
          boxShadow:
            "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="col-span-1 md:col-span-1">
            <div className="title">
              <h2 className=" text-3xl font-semibold">
                Contact <span className="text-orange-500">Us</span>
              </h2>
              <hr className=" border-2 border-blue-500 w-40 rounded-sm mt-2" />
              <p className="text-gray-600 my-4">
                Namrata & Tushar cattle feed Traders was established in 2005.
                Namrata & Tushar Traders, a trusted name in the field of cattle
                feed, believes in quality delivery at the right time and place.
              </p>
            </div>
            <div className="content">
              <div className="info mt-8">
                <h4 className="inline-block text-base">
                  <PhoneAndroidIcon /> PHONE :<br />
                  <span className="text-gray-700">9923959839 , 8999363590</span>
                </h4>
              </div>
              <div className="info mt-8">
                <h4 className="inline-block text-base">
                  <EmailIcon /> EMAIL :<br />
                  <span className="text-gray-700">
                    namrata&tushartraders@gmail.com
                  </span>
                </h4>
              </div>
              <div className="info mt-8">
                <h4 className="inline-block text-base">
                  <LocationOnIcon /> ADDRESS :<br />
                  <span className="text-gray-700">
                    A/P Ingrul, Tal- Shirala, Dist- Sangli. <br />
                    Maharastra, Pin- 415408.
                  </span>
                </h4>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="col-span-1 md:col-span-1">
            <form ref={form} onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  className="form-control p-4 md:p-6 bg-gray-100 rounded-xl"
                  placeholder="Name"
                  name="name"
                />
                <input
                  type="email"
                  className="form-control p-4 md:p-6 bg-gray-100 rounded-xl"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <div className="form-group mt-4 flex gap-5 flex-col">
                <input
                  type="text"
                  className="form-control p-4 md:p-6 w-full bg-gray-100 rounded-xl"
                  placeholder="Subject"
                  name="subject"
                />
                <textarea
                  className="form-control p-4 md:p-6 bg-gray-100 rounded-xl"
                  rows="5"
                  id="comment"
                  placeholder="Message"
                  name="message"
                ></textarea>
              </div>
              {/* <button
                className="btn btn-block mt-4 bg-orange-500 text-white"
                type="submit"
              >
                Send Now!
              </button> */}
              <div className=" pt-5">
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  type="submit"
                >
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
