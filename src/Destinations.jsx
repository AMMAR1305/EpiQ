import madurai from './assets/madurai.jpg';
import ooty from './assets/ooty.jpg';
import mahabalipuram from './assets/mahabalipuram.jpg';
import manimuthar from './assets/manimuthar.jpg';
import rameswarm from './assets/rameswarm.jpeg';
import chennai from './assets/chennai.jpg';
import kodaikanal from './assets/kodaikanal.jpeg';
import tiruchirappalli from './assets/tiruchirapalli.jpg';
import vellore from './assets/vellore.jpg';
import thanjavur from './assets/thanjavur.jpg';
import coimbatore from './assets/coimbatore.jpg';
import thirunelveli from './assets/thirunelveli.jpg';
function Destinations() {
  const places = [
    { name: "Chennai", desc: "The capital city with Marina Beach & Fort St. George.", img: chennai },
    { name: "Madurai", desc: "Historic city famous for Meenakshi Amman Temple.", img: madurai },
    { name: "Kodaikanal", desc: "Hill station with lakes, forests, and waterfalls.", img: kodaikanal },
    { name: "Ooty", desc: "The Queen of Hill Stations in the Nilgiris.", img: ooty },
    { name: "Mahabalipuram", desc: "Heritage site with rock-cut temples & sculptures.", img: mahabalipuram },
    { name: "Rameswaram", desc: "Sacred island with Ramanathaswamy Temple.", img: rameswarm },
    { name: "Tiruchirappalli", desc: "Famous for the Rockfort Temple and Srirangam Temple.", img: tiruchirappalli },
    { name: "Vellore", desc: "Known for Vellore Fort and educational institutions.", img: vellore },
    { name: "Thanjavur", desc: "Rich in cultural heritage, known for Brihadeeswarar Temple.", img: thanjavur },
    { name: "Coimbatore", desc: "Industrial hub, near Western Ghats with pleasant climate.", img: coimbatore },
    { name: "Courtallam", desc: "Famous for waterfalls, scenic beauty & serene atmosphere.", img: manimuthar},
    { name: "Tirunelveli", desc: "Famous for waterfalls, scenic beauty & serene atmosphere.", img: thirunelveli }
  ];

  return (
    <div className="destinations-container">
      <style>{`
        .destinations-container {
          padding: 3rem 1.5rem;
          background-color: #f3f4f6;
          font-family: 'Arial', sans-serif;
        }
        .destinations-container h2 {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 2rem;
        }
        .destinations-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .destinations-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .destination-card {
          background-color: #ffffff;
          border-radius: 1rem;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          overflow: hidden;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .destination-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.15);
        }
        .destination-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .destination-card .card-content {
          padding: 1rem;
        }
        .destination-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #111827;
          margin-bottom: 0.5rem;
        }
        .destination-card p {
          font-size: 1rem;
          color: #4b5563;
          line-height: 1.5;
        }
      `}</style>

      <h2>Top Destinations of Tamil Nadu</h2>

      <div className="destinations-grid">
        {places.map((place, index) => (
          <div key={index} className="destination-card">
            <img src={place.img} alt={place.name} />
            <div className="card-content">
              <h3>{place.name}</h3>
              <p>{place.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destinations;
