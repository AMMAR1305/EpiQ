import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    // Replace with your Web3Forms access key
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Form Submitted Successfully!");
      event.target.reset();
      setTimeout(() => setResult(""), 4000);
    } else {
      console.log("Error", data);
      setResult("❌ Something went wrong. Please try again!");
    }
  };

  return (
    <div className="contact-wrapper">
      <style>{`
        .contact-wrapper {
          padding: 4rem 2rem;
          background: linear-gradient(to bottom right, #f8fafc, #eef2ff);
          font-family: 'Poppins', sans-serif;
          min-height: 100vh;
        }

        .contact-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 3rem;
          background: #ffffff;
          border-radius: 1.25rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .contact-container h2 {
          font-size: 2.8rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 1.5rem;
          color: #004aad;
        }

        .contact-container p {
          text-align: center;
          color: #555;
          margin-bottom: 2.5rem;
          font-size: 1.1rem;
        }

        form label {
          display: block;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #333;
        }

        form input,
        form textarea {
          width: 100%;
          border: 1px solid #ddd;
          border-radius: 0.75rem;
          padding: 0.9rem;
          margin-bottom: 1.5rem;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        form input:focus,
        form textarea:focus {
          border-color: #004aad;
          outline: none;
          box-shadow: 0 0 8px rgba(0, 74, 173, 0.2);
        }

        form button {
          display: block;
          width: 100%;
          padding: 1rem;
          background-color: #004aad;
          color: #fff;
          font-weight: 600;
          font-size: 1.1rem;
          border: none;
          border-radius: 0.8rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        form button:hover {
          background-color: #003b8e;
          transform: translateY(-3px);
        }

        .success-message {
          text-align: center;
          color: #16a34a;
          font-weight: 600;
          margin-top: -0.5rem;
          margin-bottom: 1rem;
        }

        .info {
          text-align: center;
          font-size: 1rem;
          margin-top: 2rem;
          line-height: 1.8;
        }

        .info strong {
          color: #004aad;
        }

        .social-icons {
          margin-top: 1rem;
          display: flex;
          justify-content: center;
          gap: 1.5rem;
        }

        .social-icons a {
          font-size: 1.6rem;
          color: #004aad;
          transition: all 0.3s ease;
        }

        .social-icons a:hover {
          color: #007bff;
          transform: scale(1.2);
        }

        .map-section {
          margin-top: 3rem;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        iframe {
          width: 100%;
          height: 350px;
          border: 0;
        }

        @media (max-width: 600px) {
          .contact-container {
            padding: 2rem;
          }

          .contact-container h2 {
            font-size: 2.2rem;
          }

          .contact-container p {
            font-size: 1rem;
          }
        }
      `}</style>

      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Contact Us</h2>
        <p>We’d love to hear from you! Send us a message below and we’ll respond soon.</p>

        {/* Contact Form (Web3Forms Integration) */}
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Enter your email" required />

          <label htmlFor="message">Message</label>
          <textarea name="message" rows="5" placeholder="Type your message..." required></textarea>

          <button type="submit">Send Message</button>
        </form>

        {result && <div className="success-message">{result}</div>}

        {/* Contact Info */}
        <div className="info">
          <FaEnvelope /> <strong> support@epicurevoyagetourism.com</strong> <br />
          <FaPhoneAlt /> <strong> +91 98765 43210</strong>

          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="map-section">
          <iframe
            title="Tamil Nadu Tourism Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1995706.2827578033!2d77.0!3d10.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5818f4536c3%3A0xe94f33c71b5abf04!2sTamil%20Nadu!5e0!3m2!1sen!2sin!4v1686655821992!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
}
