import React from "react";
import rameswaram from "../assets/rameswaram.jpeg";

const DistrictPage = () => {
  const district = "Rameswaram";

  const about = `Rameswaram, a sacred pilgrimage town in Tamil Nadu, is famous for the Ramanathaswamy Temple, beautiful beaches, and its spiritual and historical significance.`;

  const attractions = [
    { name: "Ramanathaswamy Temple", desc: "Famous Hindu temple with magnificent corridors and sacred water tanks." },
    { name: "Pamban Bridge", desc: "Iconic railway bridge connecting Rameswaram to mainland India." },
    { name: "Dhanushkodi Beach", desc: "Serene beach with ruins of the old town, perfect for sunrise views." },
    { name: "Agni Theertham", desc: "Sacred bathing spot in the ocean near the temple." },
  ];

  const cuisines = [
    { name: "Seafood Delicacies", desc: "Freshly caught fish and prawn dishes cooked with coastal flavors." },
    { name: "Idiyappam & Coconut Milk", desc: "Traditional dish served during festivals and special occasions." },
  ];

  const resorts = [
    { name: "Ocean View Resort", desc: "Beachside stay with modern amenities and scenic views." },
    { name: "Rameswaram Heritage Hotel", desc: "Comfortable accommodation reflecting local heritage." },
  ];

  const festivals = [
    { name: "Mahashivaratri", month: "February / March", desc: "Festival attracting thousands of pilgrims to the Ramanathaswamy Temple." },
  ];

  const reach = [
    { mode: "By Air", desc: "Nearest airport is Madurai Airport (approx. 170 km)." },
    { mode: "By Train", desc: "Rameswaram Railway Station connects with Chennai and other major cities." },
    { mode: "By Road", desc: "Well-connected via buses and taxis from Ramanathapuram and Madurai." },
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


      <div className="district-hero">
        <img src={rameswaram} alt="Rameswaram" />
        <div className="hero-text">
          <h1>{district}</h1>
          <p>Sacred Pilgrimage & Coastal Town</p>
        </div>
      </div>

      <section><h2>About {district}</h2><p style={{ textAlign: "justify" }}>{about}</p></section>

      <section><h2>Top Attractions</h2>{attractions.map((item, i) => (<div className="info-list" key={i}><h3>{item.name}</h3><p>{item.desc}</p></div>))}</section>

      <section><h2>Famous Cuisines</h2>{cuisines.map((item, i) => (<div className="info-list" key={i}><h3>{item.name}</h3><p>{item.desc}</p></div>))}</section>

      <section><h2>Resorts & Accommodation</h2>{resorts.map((item, i) => (<div className="info-list" key={i}><h3>{item.name}</h3><p>{item.desc}</p></div>))}</section>

      <section><h2>Festivals</h2>{festivals.map((item, i) => (<div className="info-list" key={i}><h3>{item.name}</h3><small>{item.month}</small><p>{item.desc}</p></div>))}</section>

      <section><h2>How to Reach {district}</h2>{reach.map((item, i) => (<div className="info-list" key={i}><h3>{item.mode}</h3><p>{item.desc}</p></div>))}</section>
    </div>
  );
};

export default DistrictPage;
