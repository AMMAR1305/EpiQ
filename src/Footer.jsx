import React from "react";

function Footer() {
  const footerStyle = {
    background: "linear-gradient(90deg, #004d40)",
    color: "#fff",
    textAlign: "center",
    padding: "60px 20px",
    marginTop: "50px",
    boxShadow: "0 -4px 10px rgba(0, 0, 0, 0.3)",
    fontFamily: "'Arial', sans-serif",
  };

  const linkContainer = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "15px",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "all 0.3s ease",
  };

  const linkHover = {
    color: "#ffd700",
    transform: "scale(1.1)",
  };

  const [hovered, setHovered] = React.useState("");

  const newsletterStyle = {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
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
    transition: "background-color 0.3s ease",
  };

  return (
    <footer style={footerStyle}>
      <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Stay Connected with Tamil Nadu Tourism</h2>

      <div style={newsletterStyle}>
        <input type="email" placeholder="Enter your email" style={inputStyle} />
        <button style={buttonStyle}>Subscribe</button>
      </div>

      <div style={linkContainer}>
        {["Facebook", "Instagram", "YouTube", "Twitter", "LinkedIn"].map((item) => (
          <a
            key={item}
            href="#"
            style={{
              ...linkStyle,
              ...(hovered === item ? linkHover : {}),
            }}
            onMouseEnter={() => setHovered(item)}
            onMouseLeave={() => setHovered("")}
          >
            {item}
          </a>
        ))}
      </div>

      <div style={{ marginTop: "30px", lineHeight: "1.8" }}>
        <p><strong>Contact Us:</strong></p>
        <p>Email: support@tamilnadutourism.com | Phone: +91 98765 43210</p>
        <p>Address: Tamil Nadu Tourism Office, Chennai, India</p>
      </div>

      <p style={{ marginTop: "30px", fontSize: "14px", opacity: 0.8 }}>
        Explore the beauty, culture, and heritage of Tamil Nadu | © 2025 Tamil Nadu Tourism. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
