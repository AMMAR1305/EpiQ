import React from "react";
import madurai from "../assets/madurai.jpg";

const DistrictPage = () => {
  const district = "Madurai";

  const about = `Madurai, known as the Temple City, is one of the oldest cities in India. Famous for the historic Meenakshi Amman Temple, its rich culture, classical Tamil music, temple rituals, and vibrant festivals make it a unique spiritual and cultural destination.`;

  const attractions = [
    { name: "Meenakshi Amman Temple", desc: "Historic temple with stunning Dravidian architecture and spiritual significance." },
    { name: "Thirumalai Nayakkar Palace", desc: "A 17th-century royal palace showcasing Indo-Saracenic architecture." },
    { name: "Alagar Hills", desc: "Scenic hills known for their temple and natural beauty." },
    { name: "Gandhi Memorial Museum", desc: "Dedicated to Mahatma Gandhi, showcasing India's freedom struggle." },
  ];

  const cuisines = [
    { name: "Jigarthanda", desc: "A signature Madurai drink made with milk, almond gum, and sarsaparilla syrup." },
    { name: "Idiyappam", desc: "Delicate steamed rice noodles served with coconut milk or spicy curry." },
    { name: "Paruthi Paal", desc: "A traditional cotton seed milk drink with rich nutritional value." },
  ];

  const resorts = [
    { name: "Heritage Madurai", desc: "Luxury stay blending modern comfort with heritage architecture." },
    { name: "The Gateway Hotel", desc: "Upscale accommodation offering excellent hospitality and local cuisine." },
    { name: "Boutique Stays", desc: "Charming small-scale accommodations reflecting local culture." },
  ];

  const festivals = [
    { name: "Chithirai Thiruvizha", month: "April / May", desc: "A grand festival celebrating the divine marriage of Goddess Meenakshi and Lord Sundareswarar." },
    { name: "Panguni Uthiram", month: "March / April", desc: "Temple festival marked by colorful processions and rituals." },
  ];

  const reach = [
    { mode: "By Air", desc: "Madurai International Airport offers direct flights to major Indian cities and select international destinations." },
    { mode: "By Train", desc: "Madurai Junction is a major rail hub well-connected with Chennai, Trichy, Coimbatore, and other key cities." },
    { mode: "By Road", desc: "Well-linked through NH38 and NH44, with frequent bus and taxi services from neighboring cities." },
  ];

  return (
    <div className="district-page">
      <style>{`
        .district-page {
          font-family: 'Segoe UI', Arial, sans-serif;
          background-color: #fafafa;
          color: #222;
          line-height: 1.8;
        }

        /* Hero Section */
        .district-hero {
          position: relative;
          width: 100%;
          height: 90vh;
          overflow: hidden;
        }

        .district-hero img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(65%);
        }

        .hero-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: #fff;
        }

        .hero-text h1 {
          font-size: 4rem;
          font-weight: 700;
          text-shadow: 2px 2px 10px rgba(0,0,0,0.6);
        }

        .hero-text p {
          font-size: 1.5rem;
          margin-top: 0.5rem;
          text-shadow: 1px 1px 6px rgba(0,0,0,0.5);
        }

        /* Content Sections */
        section {
          max-width: 1100px;
          margin: 4rem auto;
          padding: 0 1rem;
        }

        section h2 {
          font-size: 2.4rem;
          text-align: center;
          color: #b45309;
          margin-bottom: 1.5rem;
          border-bottom: 3px solid #f59e0b;
          display: inline-block;
          padding-bottom: 0.5rem;
        }

        section p, li {
          font-size: 1.15rem;
          color: #333;
        }

        ul {
          list-style: none;
          padding-left: 0;
          margin-left: 0;
      }   


        /* Cards replaced by clean lists */
        .info-list {
          background: #fff;
          padding: 1.5rem 2rem;
          border-radius: 1rem;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
          margin-bottom: 2rem;
        }

        .info-list h3 {
          font-size: 1.4rem;
          color: #9a3412;
          margin-bottom: 0.5rem;
        }

        .info-list small {
          display: block;
          color: #6b7280;
          margin-bottom: 0.3rem;
        }

        @media (max-width: 768px) {
          .hero-text h1 {
            font-size: 2.8rem;
          }
          .hero-text p {
            font-size: 1.2rem;
          }
          section {
            margin: 2.5rem auto;
          }
        }
      `}</style>

      {/* Hero Section */}
      <div className="district-hero">
        <img src={madurai} alt="Madurai City" />
        <div className="hero-text">
          <h1>{district}</h1>
          <p>The Temple City of Tamil Nadu</p>
        </div>
      </div>

      {/* About */}
      <section>
        <h2>About {district}</h2>
        <p style={{ textAlign: "justify" }}>{about}</p>
      </section>

      {/* Attractions */}
      <section>
        <h2>Top Attractions</h2>
        {attractions.map((item, i) => (
          <div className="info-list" key={i}>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Cuisines */}
      <section>
        <h2>Famous Cuisines</h2>
        {cuisines.map((item, i) => (
          <div className="info-list" key={i}>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Resorts */}
      <section>
        <h2>Resorts & Accommodation</h2>
        {resorts.map((item, i) => (
          <div className="info-list" key={i}>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Festivals */}
      <section>
        <h2>Festivals</h2>
        {festivals.map((fest, i) => (
          <div className="info-list" key={i}>
            <h3>{fest.name}</h3>
            <small>{fest.month}</small>
            <p>{fest.desc}</p>
          </div>
        ))}
      </section>

      {/* How to Reach */}
      <section>
        <h2>How to Reach {district}</h2>
        {reach.map((item, i) => (
          <div className="info-list" key={i}>
            <h3>{item.mode}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default DistrictPage;
