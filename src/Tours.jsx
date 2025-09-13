import temple from './assets/temple.jpeg';
import hill from './assets/hill.jpg';
import beach from './assets/beach.jpg';
import safari from './assets/safari.jpg';
import spr from './assets/spr.webp';
import ss from './assets/ss.jpeg';

function Tours() {
  const tours = [
    { 
      title: "Temple Trail", 
      days: "3 Days", 
      price: "₹4,999", 
      desc: "Explore Madurai, Rameswaram, and Kanchipuram temples, experiencing rich heritage and spirituality.",
      img: temple
    },
    { 
      title: "Hill Station Escape", 
      days: "4 Days", 
      price: "₹7,499", 
      desc: "Relax in Ooty and Kodaikanal surrounded by lush green landscapes, lakes, and waterfalls.",
      img: hill
    },
    { 
      title: "Beach & Heritage", 
      days: "2 Days", 
      price: "₹3,999", 
      desc: "Enjoy Mahabalipuram rock temples and the beauty of Marina Beach, perfect for a short getaway.",
      img: beach
    },
    { 
      title: "Wildlife Safari", 
      days: "3 Days", 
      price: "₹5,499", 
      desc: "Visit Mudumalai and Anamalai wildlife sanctuaries for a thrilling experience with nature.",
      img: safari
    },
    { 
      title: "Spiritual Sojourn", 
      days: "5 Days", 
      price: "₹8,999", 
      desc: "A spiritual journey covering Chidambaram, Thiruvannamalai, and Srirangam temples.",
      img: spr
    },
    { 
      title: "Cultural Discovery", 
      days: "3 Days", 
      price: "₹6,499", 
      desc: "Immerse in Tamil culture visiting local villages, arts, traditional cuisine, and festivals.",
      img: ss
    },
  ];

  return (
    <div className="tours-container">
      <style>{`
        .tours-container {
          padding: 3rem 1.5rem;
          background-color: #f9fafb;
          font-family: 'Arial', sans-serif;
        }
        .tours-container h2 {
          text-align: center;
          font-size: 2.75rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 3rem;
        }
        .tours-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .tours-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .tour-card {
          background-color: #ffffff;
          border-radius: 1rem;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          overflow: hidden;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .tour-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.15);
        }
        .tour-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }
        .tour-card .card-content {
          padding: 1.5rem;
        }
        .tour-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #111827;
          margin-bottom: 0.75rem;
        }
        .tour-card .tour-info {
          font-size: 1rem;
          color: #4b5563;
          font-weight: 500;
          margin-bottom: 0.75rem;
        }
        .tour-card p {
          font-size: 1rem;
          color: #4b5563;
          line-height: 1.5;
        }
        .tour-card button {
          display: inline-block;
          margin-top: 1rem;
          padding: 0.6rem 1.5rem;
          background-color: #047857;
          color: #fff;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          font-weight: 600;
          transition: background-color 0.3s ease;
        }
        .tour-card button:hover {
          background-color: #065f46;
        }
      `}</style>

      <h2>Exciting Tour Packages</h2>

      <div className="tours-grid">
        {tours.map((tour, i) => (
          <div key={i} className="tour-card">
            <img src={tour.img} alt={tour.title} />
            <div className="card-content">
              <h3>{tour.title}</h3>
              <div className="tour-info">{tour.days} | {tour.price}</div>
              <p>{tour.desc}</p>
              <button>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tours;
