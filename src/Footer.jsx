import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const [email, setEmail] = useState("");
  const [hovered, setHovered] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = () => {
    if (!email || !email.includes("@")) {
      setMessage("⚠️ Please enter a valid email address");
    } else {
      setMessage("✅ Thank you for subscribing!");
      setEmail("");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: <FaFacebookF />, name: "Facebook", url: "#" },
    { icon: <FaInstagram />, name: "Instagram", url: "#" },
    { icon: <FaYoutube />, name: "YouTube", url: "#" },
    { icon: <FaTwitter />, name: "Twitter", url: "#" },
    { icon: <FaLinkedinIn />, name: "LinkedIn", url: "#" },
  ];

  const footerStyle = {
    background: "linear-gradient(90deg, #004d40, #00695c)",
    color: "#fff",
    textAlign: "center",
    padding: "60px 20px",
    marginTop: "50px",
    boxShadow: "0 -4px 10px rgba(0, 0, 0, 0.3)",
    fontFamily: "'Poppins', sans-serif",
  };

  const linkContainer = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "20px",
  };

  const iconStyle = {
    color: "#fff",
    fontSize: "1.5rem",
    transition: "transform 0.3s ease, color 0.3s ease",
  };

  const newsletterStyle = {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "10px",
  };

  const inputStyle = {
    padding: "0.75rem 1rem",
    borderRadius: "0.5rem",
    border: "none",
    width: "250px",
    fontSize: "1rem",
  };

  const buttonStyle = {
    padding: "0.75rem 1.5rem",
    backgroundColor: "#ffd700",
    border: "none",
    borderRadius: "0.5rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const backToTopStyle = {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    backgroundColor: "#ffd700",
    color: "#004d40",
    border: "none",
    borderRadius: "50%",
    padding: "10px",
    cursor: "pointer",
    boxShadow: "0 0 10px rgba(0,0,0,0.3)",
    transition: "transform 0.3s ease",
  };

  return (
    <>
      <footer style={footerStyle}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>
          Stay Connected with <span style={{ color: "#ffd700" }}>EpicureVoyage</span> Tourism
        </h2>

        {/* Newsletter Subscription */}
        <div style={newsletterStyle}>
          <input
            type="email"
            placeholder="Enter your email"
            style={inputStyle}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            style={buttonStyle}
            onClick={handleSubscribe}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#ffeb3b")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#ffd700")}
          >
            Subscribe
          </button>
        </div>
        {message && (
          <p style={{ marginTop: "10px", fontSize: "1rem", color: "#ffd700" }}>{message}</p>
        )}

        {/* Social Media Links */}
        <div style={linkContainer}>
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...iconStyle,
                color: hovered === item.name ? "#ffd700" : "#fff",
                transform: hovered === item.name ? "scale(1.2)" : "scale(1)",
              }}
              onMouseEnter={() => setHovered(item.name)}
              onMouseLeave={() => setHovered("")}
              title={item.name}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Contact Information */}
        <div style={{ marginTop: "30px", lineHeight: "1.8" }}>
          <p><strong>Contact Us:</strong></p>
          <p>Email: epicurevoyage@tourism.com | Phone: +91 98765 43210</p>
          <p>Address: EpicureVoyage Office, Chennai, India</p>
        </div>

        <p style={{ marginTop: "30px", fontSize: "14px", opacity: 0.8 }}>
          Explore the beauty, culture, and heritage of Tamil Nadu | © 2025 EpicureVoyage. All Rights Reserved.
        </p>
      </footer>

      {/* Back to Top Button */}
      <button
        style={backToTopStyle}
        onClick={handleScrollTop}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        title="Back to Top"
      >
        <FaArrowUp />
      </button>
    </>
  );
}

export default Footer;
