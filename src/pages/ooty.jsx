import React from "react";
import ooty from "../assets/ooty.jpg";

const DistrictPage = () => {
  const district = "Ooty";

  const about = `Ooty, also known as Udhagamandalam, is a picturesque hill station nestled in the Nilgiri Hills of Tamil Nadu. Famous for its lush tea gardens, scenic landscapes, and serene lakes.`;

  const attractions = [
    { name: "Ooty Lake", desc: "A beautiful artificial lake surrounded by gardens and boating facilities." },
    { name: "Doddabetta Peak", desc: "The highest peak in Nilgiris offering panoramic views of the hills." },
    { name: "Botanical Gardens", desc: "Gardens showcasing a variety of exotic and indigenous plants." },
    { name: "Tea Museum", desc: "Learn about tea production and explore historical artifacts." },
  ];

  const cuisines = [
    { name: "Homemade Chocolates", desc: "Locally made chocolates with unique flavors." },
    { name: "Nilgiri Tea", desc: "Aromatic tea grown in the Nilgiris hills." },
    { name: "Varkey Biscuits", desc: "Crispy biscuits, a popular local snack." },
  ];

  const resorts = [
    { name: "Savoy Hotel", desc: "Luxury colonial-style accommodation with modern amenities." },
    { name: "Gem Park Ooty", desc: "Comfortable stay surrounded by scenic beauty." },
    { name: "Sterling Ooty Fern Hill", desc: "Resort offering great views and premium facilities." },
  ];

  const festivals = [
    { name: "Ooty Summer Festival", month: "May", desc: "Annual festival with flower shows, boat races, and cultural events." },
    { name: "Tea and Tourism Festival", month: "October", desc: "Celebrates the tea culture of Ooty with exhibitions and performances." },
  ];

  const reach = [
    { mode: "By Air", desc: "Nearest airport is Coimbatore International Airport (approx. 88 km)." },
    { mode: "By Train", desc: "Ooty is connected by the Nilgiri Mountain Railway from Mettupalayam." },
    { mode: "By Road", desc: "Well-connected by buses and taxis from Coimbatore, Mysuru, and Bengaluru." },
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
        <img src={ooty} alt="Ooty" />
        <div className="hero-text">
          <h1>{district}</h1>
          <p>The Queen of Hill Stations</p>
        </div>
      </div>

      <section>
        <h2>About {district}</h2>
        <p style={{ textAlign: "justify" }}>{about}</p>
      </section>

      <section>
        <h2>Top Attractions</h2>
        {attractions.map((item, i) => (
          <div className="info-list" key={i}>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>Famous Cuisines</h2>
        {cuisines.map((item, i) => (
          <div className="info-list" key={i}>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>Resorts & Accommodation</h2>
        {resorts.map((item, i) => (
          <div className="info-list" key={i}>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>Festivals</h2>
        {festivals.map((item, i) => (
          <div className="info-list" key={i}>
            <h3>{item.name}</h3>
            <small>{item.month}</small>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>

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
