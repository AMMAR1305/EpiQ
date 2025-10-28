import React from "react";
import manimuthar from "../assets/manimuthar.jpg";

const DistrictPage = () => {
  const district = "Manimuthar";

  const about = `Manimuthar is a scenic destination in Tamil Nadu, known for its waterfalls, lush forests, and tranquil environment. It's perfect for nature lovers and adventure seekers.`;

  const attractions = [
    { name: "Manimuthar Waterfalls", desc: "Beautiful cascading waterfalls surrounded by greenery." },
    { name: "Manjolai Hills", desc: "Tea plantations with scenic viewpoints and trekking trails." },
    { name: "Manimuthar Dam", desc: "A serene dam ideal for picnics and photography." },
  ];

  const cuisines = [
    { name: "South Indian Snacks", desc: "Traditional snacks like vadai, murukku, and sundal." },
    { name: "Local Tea", desc: "Freshly brewed tea from nearby plantations." },
  ];

  const resorts = [
    { name: "Forest Retreats", desc: "Eco-friendly stay amidst nature." },
    { name: "Hillview Resort", desc: "Comfortable accommodation with panoramic views." },
  ];

  const festivals = [
    { name: "Pongal", month: "January", desc: "Traditional harvest festival celebrated with local rituals." },
  ];

  const reach = [
    { mode: "By Road", desc: "Accessible via buses and taxis from Tirunelveli and nearby towns." },
  ];

  return (
    <div className="district-page">
      <style>{`
        .district-page { font-family: 'Segoe UI', Arial, sans-serif; background-color: #fafafa; color: #222; line-height: 1.8; }
        .district-hero { position: relative; width: 100%; height: 90vh; overflow: hidden; }
        .district-hero img { width: 100%; height: 100%; object-fit: cover; filter: brightness(65%); }
        .hero-text { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; color: #fff; }
        .hero-text h1 { font-size: 4rem; font-weight: 700; text-shadow: 2px 2px 10px rgba(0,0,0,0.6); }
        .hero-text p { font-size: 1.5rem; margin-top: 0.5rem; text-shadow: 1px 1px 6px rgba(0,0,0,0.5); }
        section { max-width: 1100px; margin: 4rem auto; padding: 0 1rem; }
        section h2 { font-size: 2.4rem; text-align: center; color: #b45309; margin-bottom: 1.5rem; border-bottom: 3px solid #f59e0b; display: inline-block; padding-bottom: 0.5rem; }
        section p, li { font-size: 1.15rem; color: #333; }
        ul { list-style: none; padding-left: 0; margin-left: 0; }
        .info-list { background: #fff; padding: 1.5rem 2rem; border-radius: 1rem; box-shadow: 0 4px 15px rgba(0,0,0,0.08); margin-bottom: 2rem; }
        .info-list h3 { font-size: 1.4rem; color: #9a3412; margin-bottom: 0.5rem; }
        .info-list small { display: block; color: #6b7280; margin-bottom: 0.3rem; }
        @media (max-width: 768px) { .hero-text h1 { font-size: 2.8rem; } .hero-text p { font-size: 1.2rem; } section { margin: 2.5rem auto; } }
      `}</style>

      <div className="district-hero">
        <img src={manimuthar} alt="Manimuthar" />
        <div className="hero-text">
          <h1>{district}</h1>
          <p>Nature & Waterfalls Destination</p>
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
