import { Link } from "react-router-dom";
import Testimonials from "./Testimonials";

// Import images
import madurai from './assets/madurai.jpg';
import ooty from './assets/ooty.jpg';
import mahabalipuram from './assets/mahabalipuram.jpg';

function Home() {
  const featuredDestinations = [
    {
      name: "Madurai",
      desc: "Known for the iconic Meenakshi Amman Temple, vibrant streets, and cultural richness.",
      img: madurai
    },
    {
      name: "Kodaikanal",
      desc: "The Princess of Hill Stations with serene lakes, lush forests, and cool climate.",
      img: ooty
    },
    {
      name: "Mahabalipuram",
      desc: "Famous for ancient rock-cut temples, Shore Temple, and intricate sculptures.",
      img: mahabalipuram
    },
  ];

  const quickFacts = [
    { title: "Ancient Temples", value: "200+" },
    { title: "Hill Stations", value: "10+" },
    { title: "Beaches", value: "15+" },
    { title: "Bird Sanctuaries", value: "5+" },
  ];

  return (
    <div>
      <style>{`
        body {
          font-family: 'Poppins', sans-serif;
          margin: 0;
          padding: 0;
          background: #f9fafb;
          color: #333;
        }

        /* Hero Section */
        .hero-video {
          position: relative;
          height: 100vh;
          width: 100%;
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #FFD700;
          z-index: 2;
        }

        .hero-overlay h1 {
          font-size: 4rem;
          font-weight: 900;
          margin-bottom: 1rem;
          text-shadow: 3px 3px 12px rgba(0,0,0,0.8);
        }

        .hero-overlay p {
          font-size: 1.75rem;
          margin-bottom: 2rem;
          text-shadow: 2px 2px 10px rgba(0,0,0,0.7);
        }

        .btn {
          padding: 1rem 2.5rem;
          background: linear-gradient(90deg, #FFD700, #FFC107);
          color: #000;
          font-weight: bold;
          border-radius: 0.75rem;
          text-decoration: none;
          font-size: 1.1rem;
          box-shadow: 0 6px 20px rgba(0,0,0,0.4);
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .btn:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 25px rgba(0,0,0,0.6);
        }

        /* Featured Destinations */
        .cards {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          padding: 4rem 2rem;
          background: #ffffff;
        }
        @media (min-width: 768px) {
          .cards {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .card {
          background: #ffffff;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          transition: transform 0.4s, box-shadow 0.4s;
        }
        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.2);
        }
        .card img {
          width: 100%;
          height: 16rem;
          object-fit: cover;
        }
        .card-content {
          padding: 1.5rem;
        }
        .card-content h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: #007BFF;
        }
        .card-content p {
          font-size: 1rem;
          color: #555;
          line-height: 1.6;
        }

        /* Quick Facts Section */
        .facts {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
          padding: 4rem 2rem;
          background: #f1f5f9;
        }
        .fact-card {
          background: #ffffff;
          padding: 2rem;
          border-radius: 1rem;
          text-align: center;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .fact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.15);
        }
        .fact-card h3 {
          font-size: 2.5rem;
          color: #007BFF;
          margin-bottom: 0.5rem;
        }
        .fact-card p {
          font-size: 1.25rem;
          color: #555;
        }

        /* Informational Section */
        .info-section {
          max-width: 900px;
          margin: 0 auto;
          padding: 4rem 2rem;
          text-align: center;
        }
        .info-section h2 {
          font-size: 2.75rem;
          font-weight: 800;
          color: #007BFF;
          margin-bottom: 1.5rem;
        }
        .info-section p {
          font-size: 1.25rem;
          color: #444;
          line-height: 1.8;
        }

        /* Footer */
        footer {
          text-align: center;
          padding: 2rem;
          background: #007BFF;
          color: #fff;
          font-size: 1rem;
        }

        /* Hero Video Iframe */
        .bg-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -1;
          pointer-events: none;
        }
      `}</style>

      {/* Hero Section */}
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
  <iframe
    width="100%"
    height="100%"
    src="https://www.youtube.com/embed/NbkRQJzNFjg?autoplay=1&mute=1&controls=0"
    title="YouTube video"
    frameBorder="0"
    allow="autoplay; encrypted-media; fullscreen"
    style={{ position: "absolute", top: 0, left: 0 }}
  ></iframe>

  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "#FFD700",
      textAlign: "center",
      zIndex: 1
    }}
  >
    <h1 style={{ fontSize: "4rem", textShadow: "2px 2px 10px black" }}>Explore Tamil Nadu</h1>
    <p style={{ fontSize: "1.5rem", textShadow: "2px 2px 8px black" }}>The Jewel of South India – Temples, Culture, and Nature</p> 
    <Link to="/destinations" style={{
      padding: "1rem 2rem",
      background: "linear-gradient(90deg, #FFD700, #FFC107)",
      borderRadius: "0.5rem",
      fontWeight: "bold",
      textDecoration: "none",
      color: "#000"
    }}>Explore Now</Link> 
  </div>
</div>


      {/* Featured Destinations */}
      <section className="cards">
        {featuredDestinations.map((place, index) => (
          <div key={index} className="card">
            <img src={place.img} alt={place.name} />
            <div className="card-content">
              <h3>{place.name}</h3>
              <p>{place.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Quick Facts */}
      <section className="facts">
        {quickFacts.map((fact, i) => (
          <div key={i} className="fact-card">
            <h3>{fact.value}</h3>
            <p>{fact.title}</p>
          </div>
        ))}
      </section>

      {/* Informational Section */}
      <section className="info-section">
        <h2>Why Visit Tamil Nadu?</h2>
        <p>
          Tamil Nadu is a perfect blend of history, spirituality, and scenic beauty. 
          From the towering gopurams of Meenakshi Temple to tranquil hill stations like Kodaikanal,
          and coastal charm of Mahabalipuram, each destination tells a unique story. 
          Witness vibrant festivals, experience authentic Tamil cuisine, and enjoy the warm hospitality.
        </p>
      </section>

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
}

export default Home;
