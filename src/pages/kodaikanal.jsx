import React from "react";
import kodaikanal from "../assets/kodaikanal.jpeg";

const DistrictPage = () => {
  const district = "Kodaikanal";

  const about = `Kodaikanal is a serene hill station in the Western Ghats, known for its misty mountains, Kodaikanal Lake, waterfalls, and lush forests.`;

  const attractions = [
    { name: "Kodaikanal Lake", desc: "Star-shaped lake with boating and walking paths." },
    { name: "Coaker's Walk", desc: "Scenic pathway offering breathtaking valley views." },
    { name: "Bear Shola Falls", desc: "Popular waterfall amidst lush greenery." },
    { name: "Bryant Park", desc: "Well-maintained botanical garden with rare plants." },
  ];

  const cuisines = [
    { name: "Homemade Chocolates", desc: "Delicious chocolates made from local cocoa." },
    { name: "Hill Station Snacks", desc: "Steamed corn, sandwiches, and baked goods." },
  ];

  const resorts = [
    { name: "Hilltop Resort", desc: "Comfortable stay with valley views." },
    { name: "Forest Lodges", desc: "Eco-friendly stays surrounded by nature." },
  ];

  const festivals = [
    { name: "Kodaikanal Summer Festival", month: "May", desc: "Floral shows, boat races, and cultural events." },
  ];

  const reach = [
    { mode: "By Road", desc: "Accessible via buses and taxis from Madurai and Coimbatore." },
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
        <img src={kodaikanal} alt="Kodaikanal" />
        <div className="hero-text">
          <h1>{district}</h1>
          <p>Hill Station & Nature Escape</p>
        </div>
      </div>

      <section><h2>About {district}</h2><p style={{ textAlign: "justify" }}>{about}</p></section>
      <section><h2>Top Attractions</h2>{attractions.map((item,i)=>(<div className="info-list" key={i}><h3>{item.name}</h3><p>{item.desc}</p></div>))}</section>
      <section><h2>Famous Cuisines</h2>{cuisines.map((item,i)=>(<div className="info-list" key={i}><h3>{item.name}</h3><p>{item.desc}</p></div>))}</section>
      <section><h2>Resorts & Accommodation</h2>{resorts.map((item,i)=>(<div className="info-list" key={i}><h3>{item.name}</h3><p>{item.desc}</p></div>))}</section>
      <section><h2>Festivals</h2>{festivals.map((item,i)=>(<div className="info-list" key={i}><h3>{item.name}</h3><small>{item.month}</small><p>{item.desc}</p></div>))}</section>
      <section><h2>How to Reach {district}</h2>{reach.map((item,i)=>(<div className="info-list" key={i}><h3>{item.mode}</h3><p>{item.desc}</p></div>))}</section>
    </div>
  );
};

export default DistrictPage;
