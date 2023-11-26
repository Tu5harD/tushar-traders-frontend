// Contact.js

import React, { useState } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = service_xdx999q; // Replace with your actual service ID
    const templateID = template_297688s; // Replace with your actual template ID
    const userID = Vhlc_EIfChq4oDLyZ; // Replace with your actual user ID

    const templateParams = {
      from_name: name,
      to_name: "Tushar Traders",
      from_email: email,
      subject: subject,
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((result) => {
        console.log(result.text);
        alert("Message Sent!");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        console.log(error.text);
      });
  };
  return (
    <section className="contact py-5">
      <div className="container mx-auto bg-gray-50 px-5 py-5 md:py-20 md:px-20 rounded-xl " style={{boxShadow: "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"}}>
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
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  className="form-control p-4 md:p-6 bg-gray-100 rounded-xl"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  className="form-control p-4 md:p-6 bg-gray-100 rounded-xl"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group mt-4 flex gap-5 flex-col">
                <input
                  type="text"
                  className="form-control p-4 md:p-6 w-full bg-gray-100 rounded-xl"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                  className="form-control p-4 md:p-6 bg-gray-100 rounded-xl"
                  rows="5"
                  id="comment"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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
                  onClick={handleSubmit}
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
