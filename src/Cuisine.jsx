function Cuisine() {
  const cuisines = [
    {
      title: "Chettinad Cuisine",
      desc: "Famous for its spicy curries, pepper chicken, and aromatic biryanis.",
    },
    {
      title: "Madurai Jigarthanda",
      desc: "A cool and creamy drink made with milk, ice cream, and sarsaparilla syrup.",
    },
    {
      title: "Kanchipuram Idli",
      desc: "A spiced version of idli made with cumin, pepper, and ginger.",
    },
    {
      title: "Dindigul Biryani",
      desc: "Unique biryani with seeraga samba rice and a distinct spicy flavor.",
    },
    {
      title: "Parotta & Salna",
      desc: "Layered parottas served with a spicy curry, popular in roadside stalls.",
    },
    {
      title: "Filter Coffee",
      desc: "Authentic South Indian filter coffee with rich aroma and frothy top.",
    },
  ];

  return (
    <div className="cuisine-container">
      <style>{`
        .cuisine-container {
          padding: 3rem 1.5rem;
          background-color: #f9fafb;
          font-family: 'Arial', sans-serif;
        }
        .cuisine-container h2 {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 2rem;
        }
        .cuisine-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .cuisine-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .cuisine-card {
          background: #fff;
          border-radius: 1rem;
          box-shadow: 0 6px 16px rgba(0,0,0,0.1);
          padding: 1.5rem;
          transition: transform 0.3s ease;
        }
        .cuisine-card:hover {
          transform: translateY(-5px);
        }
        .cuisine-card h3 {
          font-size: 1.4rem;
          margin-bottom: 0.5rem;
          color: #004d40;
        }
        .cuisine-card p {
          color: #4b5563;
        }
      `}</style>

      <h2>Famous Tamil Nadu Cuisine</h2>
      <div className="cuisine-grid">
        {cuisines.map((food, i) => (
          <div key={i} className="cuisine-card">
            <h3>{food.title}</h3>
            <p>{food.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cuisine;
