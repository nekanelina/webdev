// src/ContactUs.js

import { useState } from "react";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneType, setPhoneType] = useState("");
  const [comments, setComments] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();

    const contactUsInformation = {
      name,
      email,
      phone,
      phoneType,
      comments,
      submittedOn: new Date(),
    };

    console.log(contactUsInformation);

    setName("");
    setEmail("");
    setPhone("");
    setPhoneType("");
    setComments("");
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              id="phone"
              name="phone"
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <select
              name="phoneType"
              onChange={(e) => setPhoneType(e.target.value)}
              value={phoneType}
            >
              <option value="" disabled>
                Select a phone type...
              </option>
              <option>Home</option>
              <option>Work</option>
              <option>Mobile</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            name="comments"
            onChange={(e) => setComments(e.target.value)}
            value={comments}
          />
        </div>
        <div>
          <h2>Contact Us</h2>
          <form onSubmit={onSubmit}> </form>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
