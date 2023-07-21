import React, { useState } from 'react';
import data from './data.json';

const Contact = () => {

  const [showModal, setShowModal] = useState(null);

  const apiUrl = 'https://api.web3forms.com/submit';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    access_key: data.contact.ACCESS_KEY
  });

  const closeModal = () => {
    setShowModal(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const res = await response.json();
        console.log(res);
        if (res.success) {
          setShowModal('✅ ' + res.message);
          setFormData({
            ...formData,
            name: '',
            email: '',
            message: ''
          });
        }
        else setShowModal('❌ ' + res.message);
      } else {
        setShowModal('❌ Error! Your message was not sent!');
      }
    } catch (error) {
      setShowModal('❌ Error! Something went wrong.');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <section id="contact" className="contact sec-pad dynamicBg">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main heading-sec__main--lt">
            {data.contact.heading}
          </span>
          <span className="heading-sec__sub heading-sec__sub--lt">
            {data.contact.subHeading}
          </span>
        </h2>
        <div className="contact__form-container">
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="name">
                Name
              </label>
              <input
                required
                placeholder="Enter Your Name"
                type="text"
                className="contact__form-input"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="email">
                Email
              </label>
              <input
                required
                placeholder="Enter Your Email"
                type="text"
                className="contact__form-input"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="message">
                Message
              </label>
              <textarea
                required
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Enter Your Message"
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn--theme contact__btn">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Modal to display success/failure */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>{showModal}</h3>
            <button className="btn btn--med btn--theme" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
