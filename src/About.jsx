import img from "./assets/img.webp";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about-section">
      <style>{`
        .about-section {
          padding: 4rem 2rem;
          max-width: 1300px;
          margin: 3rem auto;
          font-family: 'Poppins', sans-serif;
          color: #1f2937;
          background: linear-gradient(to bottom, #f9fafb, #f1f5f9);
          border-radius: 1rem;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
        }

        .about-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .about-header h2 {
          font-size: 3rem;
          font-weight: 800;
          color: #004aad;
          margin-bottom: 1rem;
          letter-spacing: 1px;
        }

        .about-header p {
          font-size: 1.2rem;
          color: #4b5563;
          max-width: 750px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }

        @media (min-width: 992px) {
          .about-content {
            grid-template-columns: 1fr 1fr;
          }
        }

        .about-image img {
          width: 100%;
          max-height: 480px;
          border-radius: 1rem;
          object-fit: cover;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .about-image img:hover {
          transform: scale(1.05);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
        }

        .about-text p {
          font-size: 1.15rem;
          margin-bottom: 1.5rem;
          text-align: justify;
          line-height: 1.8;
        }

        .about-text strong {
          color: #004aad;
        }

        .highlights {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.8rem;
          margin-top: 2.5rem;
        }

        .highlight-card {
          background: #fff;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: all 0.3s ease;
        }

        .highlight-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          background: linear-gradient(to bottom right, #004aad, #007bff);
          color: white;
        }

        .highlight-card h3 {
          font-size: 1.4rem;
          margin-bottom: 0.8rem;
          color: #004aad;
        }

        .highlight-card:hover h3 {
          color: white;
        }

        .highlight-card p {
          font-size: 1rem;
          color: #4b5563;
        }

        .highlight-card:hover p {
          color: #e2e8f0;
        }

        .cta-box {
          margin-top: 3rem;
          text-align: center;
        }

        .cta-btn {
          background: #004aad;
          color: #fff;
          font-size: 1.1rem;
          font-weight: 600;
          padding: 1rem 2.5rem;
          border: none;
          border-radius: 0.6rem;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.2s ease;
        }

        .cta-btn:hover {
          background: #003b8e;
          transform: translateY(-3px);
        }
      `}</style>

      {/* Header Section */}
      <motion.div
        className="about-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>About Tamil Nadu Tourism</h2>
        <p>
          Experience the timeless beauty of Tamil Nadu — a land where
          spirituality, heritage, and nature unite to create unforgettable
          memories.
        </p>
      </motion.div>

      {/* Image + Text */}
      <div className="about-content">
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <img src={img} alt="Tamil Nadu Overview" />
        </motion.div>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <p>
            <strong>Tamil Nadu Tourism</strong> showcases the cultural wealth and
            natural beauty of South India. From the magnificent temples of{" "}
            <strong>Madurai</strong> and <strong>Thanjavur</strong> to the
            misty hills of <strong>Ooty</strong> and <strong>Kodaikanal</strong>,
            every journey offers a new story.
          </p>

          <p>
            We are dedicated to providing <strong>authentic experiences</strong>{" "}
            that are safe, sustainable, and memorable — empowering local
            communities while preserving Tamil Nadu’s heritage.
          </p>

          <p>
            Whether you love history, nature, food, or art — Tamil Nadu offers a{" "}
            <strong>journey of discovery</strong> unlike any other destination.
          </p>
        </motion.div>
      </div>

      {/* Highlights Section */}
      <motion.div
        className="highlights"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <div className="highlight-card">
          <h3>🏛️ Heritage & Culture</h3>
          <p>
            Explore centuries-old temples, rich Dravidian architecture, and
            timeless traditions.
          </p>
        </div>

        <div className="highlight-card">
          <h3>🌄 Nature & Adventure</h3>
          <p>
            From the Nilgiris to the Kanyakumari coast, nature lovers find peace
            and thrill in every corner.
          </p>
        </div>

        <div className="highlight-card">
          <h3>🍛 Cuisine & Hospitality</h3>
          <p>
            Taste the flavors of Tamil Nadu — from spicy Chettinad dishes to
            coastal seafood delights.
          </p>
        </div>

        <div className="highlight-card">
          <h3>🕉️ Spiritual Tourism</h3>
          <p>
            Visit divine destinations like Rameswaram and Chidambaram that offer
            inner peace and cultural depth.
          </p>
        </div>
      </motion.div>

      {/* CTA Button */}
      <motion.div
        className="cta-box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <button className="cta-btn">✨ Plan Your Journey ✨</button>
      </motion.div>
    </section>
  );
}

export default About;
