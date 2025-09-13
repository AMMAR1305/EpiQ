function Festivals() {
  const festivals = [
    {
      name: "Pongal",
      month: "January",
      desc: "Harvest festival celebrated with sweet pongal, kolams, and bullock cart races.",
    },
    {
      name: "Thaipusam",
      month: "January/February",
      desc: "Devotional festival honoring Lord Murugan, observed with kavadi and processions.",
    },
    {
      name: "Mahamaham",
      month: "Once every 12 years",
      desc: "Grand festival at Kumbakonam where lakhs take a holy dip in the tank.",
    },
    {
      name: "Natyanjali Festival",
      month: "February/March",
      desc: "Dance festival at Chidambaram temple dedicated to Lord Nataraja.",
    },
    {
      name: "Meenakshi Thirukalyanam",
      month: "April/May",
      desc: "Divine wedding festival of Goddess Meenakshi and Lord Sundareswarar in Madurai.",
    },
    {
      name: "Karthigai Deepam",
      month: "November/December",
      desc: "Festival of lights where thousands of lamps illuminate homes and temples.",
    },
  ];

  return (
    <div className="festivals-container">
      <style>{`
        .festivals-container {
          padding: 3rem 1.5rem;
          background-color: #fff7ed;
          font-family: 'Arial', sans-serif;
        }
        .festivals-container h2 {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          color: #9a3412;
          margin-bottom: 2rem;
        }
        .festivals-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .festivals-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .festival-card {
          background: #fff;
          border-radius: 1rem;
          box-shadow: 0 6px 16px rgba(0,0,0,0.1);
          padding: 1.5rem;
          transition: transform 0.3s ease;
        }
        .festival-card:hover {
          transform: translateY(-5px);
        }
        .festival-card h3 {
          font-size: 1.4rem;
          margin-bottom: 0.3rem;
          color: #b45309;
        }
        .festival-card small {
          color: #6b7280;
        }
        .festival-card p {
          margin-top: 0.5rem;
          color: #374151;
        }
      `}</style>

      <h2>Festivals of Tamil Nadu</h2>
      <div className="festivals-grid">
        {festivals.map((festival, i) => (
          <div key={i} className="festival-card">
            <h3>{festival.name}</h3>
            <small>{festival.month}</small>
            <p>{festival.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Festivals;
