import mudhumalai from './assets/mudhumalai.jpg';
import anamalai from './assets/anamalai.webp';
import vedanthangal from './assets/vedanthangal.avif';
import guindy from './assets/guindy.jpg';
import kmtr from './assets/kmtr.jpg';
import vallanadu from './assets/vallanadu.webp';
function Wildlife() {
  const wildlifeSpots = [
    { 
      title: "Mudumalai Wildlife Sanctuary", 
      location: "Nilgiri Hills", 
      desc: "A paradise for nature lovers, home to elephants, tigers, leopards, and over 250 species of birds.",
      img: mudhumalai  
    },
    { 
      title: "Anamalai Tiger Reserve", 
      location: "Coimbatore District", 
      desc: "Known for its rich biodiversity with lion-tailed macaques, gaur, and endangered tigers.",
      img: anamalai
    },
    { 
      title: "Vedanthangal Bird Sanctuary", 
      location: "Kanchipuram", 
      desc: "One of the oldest bird sanctuaries in India, attracting migratory birds like pelicans and storks.",
      img: vedanthangal
    },
    { 
      title: "Guindy National Park", 
      location: "Chennai", 
      desc: "An urban green haven with spotted deer, blackbucks, and a variety of bird species.",
      img: guindy
    },
    { 
      title: "Kalakkad Mundanthurai Tiger Reserve", 
      location: "Tirunelveli", 
      desc: "Dense forests with elephants, leopards, and rare bird species in the Western Ghats.",
      img: kmtr
    },
    { 
      title: "Vallanadu Blackbuck Sanctuary", 
      location: "Thoothukudi", 
      desc: "Dedicated to the protection of the elegant blackbuck antelope in a serene environment.",
      img: vallanadu
    },
  ];

  return (
    <div className="wildlife-container">
      <style>{`
        .wildlife-container {
          padding: 3rem 1.5rem;
          background-color: #f0fdf4;
          font-family: 'Arial', sans-serif;
        }
        .wildlife-container h2 {
          text-align: center;
          font-size: 2.75rem;
          font-weight: 700;
          color: #14532d;
          margin-bottom: 3rem;
        }
        .wildlife-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .wildlife-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .wildlife-card {
          background-color: #ffffff;
          border-radius: 1rem;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          overflow: hidden;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .wildlife-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.15);
        }
        .wildlife-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }
        .wildlife-card .card-content {
          padding: 1.5rem;
        }
        .wildlife-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #064e3b;
          margin-bottom: 0.5rem;
        }
        .wildlife-card .location {
          font-size: 1rem;
          color: #059669;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }
        .wildlife-card p {
          font-size: 1rem;
          color: #374151;
          line-height: 1.5;
        }
        .wildlife-card button {
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
        .wildlife-card button:hover {
          background-color: #065f46;
        }
      `}</style>

      <h2>Wildlife of Tamil Nadu</h2>

      <div className="wildlife-grid">
        {wildlifeSpots.map((spot, i) => (
          <div key={i} className="wildlife-card">
            <img src={spot.img} alt={spot.title} />
            <div className="card-content">
              <h3>{spot.title}</h3>
              <div className="location">{spot.location}</div>
              <p>{spot.desc}</p>
              <button>Explore More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wildlife;
