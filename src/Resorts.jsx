function Resorts() {
  const resorts = [
    {
      name: "Sterling Ooty Fern Hill",
      location: "Ooty",
      desc: "Scenic hill resort with luxury cottages, spa, and breathtaking views.",
    },
    {
      name: "The Carlton",
      location: "Kodaikanal",
      desc: "Lakeside resort with fine dining, spa, and boat rides.",
    },
    {
      name: "Radisson Blu Resort Temple Bay",
      location: "Mahabalipuram",
      desc: "Beachside luxury with infinity pools, spa, and heritage surroundings.",
    },
    {
      name: "Heritance Madurai",
      location: "Madurai",
      desc: "Luxury resort designed with temple architecture and serene vibes.",
    },
    {
      name: "Great Trails Yercaud by GRT Hotels",
      location: "Yercaud",
      desc: "A nature resort with valley views, trekking, and eco-friendly stay.",
    },
    {
      name: "Anantya Resort",
      location: "Kanyakumari",
      desc: "Lake-view resort surrounded by plantations, offering Ayurveda therapies.",
    },
  ];

  return (
    <div className="resorts-container">
      <style>{`
        .resorts-container {
          padding: 3rem 1.5rem;
          background-color: #f0fdf4;
          font-family: 'Arial', sans-serif;
        }
        .resorts-container h2 {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          color: #065f46;
          margin-bottom: 2rem;
        }
        .resorts-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .resorts-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .resort-card {
          background: #fff;
          border-radius: 1rem;
          box-shadow: 0 8px 18px rgba(0,0,0,0.1);
          padding: 1.5rem;
          transition: transform 0.3s ease;
        }
        .resort-card:hover {
          transform: translateY(-6px);
        }
        .resort-card h3 {
          font-size: 1.4rem;
          margin-bottom: 0.3rem;
          color: #047857;
        }
        .resort-card small {
          color: #6b7280;
        }
        .resort-card p {
          margin-top: 0.5rem;
          color: #374151;
        }
      `}</style>

      <h2>Top Resorts in Tamil Nadu</h2>
      <div className="resorts-grid">
        {resorts.map((resort, i) => (
          <div key={i} className="resort-card">
            <h3>{resort.name}</h3>
            <small>{resort.location}</small>
            <p>{resort.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resorts;
