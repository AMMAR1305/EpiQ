import img from './assets/img.webp';

function About() {
  return (
    <section className="about-section">
      <style>{`
        .about-section {
          padding: 4rem 2rem;
          max-width: 1200px;
          margin: 3rem auto;
          font-family: 'Poppins', sans-serif;
          color: #1f2937;
        }

        .about-header {
          text-align: center;
          margin-bottom: 3rem;
          animation: fadeInDown 1s ease;
        }

        .about-header h2 {
          font-size: 3rem;
          font-weight: 800;
          color: #0056b3;
          margin-bottom: 0.8rem;
        }

        .about-header p {
          font-size: 1.2rem;
          color: #4b5563;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: center;
        }

        @media (min-width: 992px) {
          .about-content {
            grid-template-columns: 1fr 1fr;
          }
        }

        .about-image img {
          width: 100%;
          max-height: 450px;
          border-radius: 1rem;
          object-fit: cover;
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .about-image img:hover {
          transform: scale(1.03);
          box-shadow: 0 15px 35px rgba(0,0,0,0.25);
        }

        .about-text p {
          font-size: 1.15rem;
          margin-bottom: 1.5rem;
          text-align: justify;
          line-height: 1.8;
        }

        .about-text strong {
          color: #0056b3;
        }

        .cta-box {
          margin-top: 2rem;
          text-align: center;
        }

        .cta-btn {
          background: #0056b3;
          color: #fff;
          font-size: 1.1rem;
          font-weight: 600;
          padding: 0.9rem 2rem;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.2s ease;
        }

        .cta-btn:hover {
          background: #004494;
          transform: translateY(-3px);
        }

        /* Simple animations */
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="about-header">
        <h2>About Tamil Nadu Tourism</h2>
        <p>
          Discover the timeless charm of Tamil Nadu – where heritage, spirituality,
          and nature come together to create unforgettable experiences.
        </p>
      </div>

      <div className="about-content">
        <div className="about-image">
          <img src={img} alt="Tamil Nadu Overview" />
        </div>
        <div className="about-text">
          <p>
            <strong>Tamil Nadu Tourism</strong> celebrates the breathtaking beauty
            and cultural richness of one of India’s most vibrant states. From the
            awe-inspiring temples of <strong>Madurai</strong> and
            <strong> Thanjavur</strong>, to the serene hill stations of
            <strong> Ooty</strong> and <strong>Kodaikanal</strong>, every corner
            tells a story worth experiencing.
          </p>

          <p>
            Our mission is to deliver <strong>authentic, safe, and memorable
            experiences</strong>. We promote <strong>sustainable tourism</strong>,
            empowering local communities while preserving our heritage for future
            generations.
          </p>

          <p>
            Whether you’re a history lover, a spiritual seeker, or a nature
            enthusiast, Tamil Nadu offers a <strong>journey of discovery</strong>
            like no other. Come explore the <strong>Jewel of South India</strong>.
          </p>

          <div className="cta-box">
            <button className="cta-btn">Plan Your Trip</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
