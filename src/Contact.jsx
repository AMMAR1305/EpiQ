function Contact() {
  return (
    <div className="contact-wrapper">
      <style>{`
        .contact-wrapper {
          padding: 4rem 2rem;
          background: #f9fafb;
          font-family: 'Arial', sans-serif;
          min-height: 100vh;
        }

        .contact-container {
          max-width: 700px;
          margin: 0 auto;
          padding: 3rem;
          background: #ffffff;
          border-radius: 1rem;
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
        }

        .contact-container h2 {
          font-size: 2.75rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 2rem;
          color: #007BFF;
        }

        .contact-container label {
          display: block;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #333;
        }

        .contact-container input,
        .contact-container textarea {
          width: 100%;
          border: 1px solid #ddd;
          border-radius: 0.75rem;
          padding: 0.75rem;
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .contact-container input:focus,
        .contact-container textarea:focus {
          border-color: #007BFF;
          outline: none;
          box-shadow: 0 0 10px rgba(0, 123, 255, 0.3);
        }

        .contact-container button {
          display: block;
          width: 100%;
          padding: 1rem;
          background-color: #007BFF;
          color: #fff;
          font-weight: bold;
          font-size: 1.2rem;
          border: none;
          border-radius: 0.75rem;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .contact-container button:hover {
          background-color: #0056b3;
          transform: translateY(-2px);
        }

        .contact-container .info {
          margin-top: 2rem;
          text-align: center;
          font-size: 1rem;
          color: #555;
        }
      `}</style>

      <div className="contact-container">
        <h2>Contact Us</h2>

        <form onSubmit={(e) => { e.preventDefault(); alert('Message Sent!'); }}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" placeholder="Enter your message" required></textarea>

          <button type="submit">Send Message</button>
        </form>

        <div className="info">
          Or reach us directly at: <br />
          <strong>Email:</strong> support@tamilnadutourism.com <br />
          <strong>Phone:</strong> +91 98765 43210
        </div>
      </div>
    </div>
  );
}

export default Contact;
