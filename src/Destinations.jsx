import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import madurai from "./assets/madurai.jpg";
import ooty from "./assets/ooty.jpg";
import mahabalipuram from "./assets/mahabalipuram.jpg";
import manimuthar from "./assets/manimuthar.jpg";
import rameswarm from "./assets/rameswaram.jpeg";
import chennai from "./assets/chennai.jpg";
import kodaikanal from "./assets/kodaikanal.jpeg";
import tiruchirappalli from "./assets/tiruchirapalli.jpg";
import vellore from "./assets/vellore.jpg";
import thanjavur from "./assets/thanjavur.jpg";
import coimbatore from "./assets/coimbatore.jpg";
import thirunelveli from "./assets/thirunelveli.jpg";

function Destinations() {
  const places = [
    { name: "Chennai", desc: "The capital city with Marina Beach & Fort St. George.", img: chennai, category: "City", path: "/chennai" },
    { name: "Madurai", desc: "Historic city famous for Meenakshi Amman Temple.", img: madurai, category: "Temple", path: "/madurai" },
    { name: "Kodaikanal", desc: "Hill station with lakes, forests, and waterfalls.", img: kodaikanal, category: "Hill Station", path: "/kodaikanal" },
    { name: "Ooty", desc: "The Queen of Hill Stations in the Nilgiris.", img: ooty, category: "Hill Station", path: "/ooty" },
    { name: "Mahabalipuram", desc: "Heritage site with rock-cut temples & sculptures.", img: mahabalipuram, category: "Heritage", path: "/mahabalipuram" },
    { name: "Rameswaram", desc: "Sacred island with Ramanathaswamy Temple.", img: rameswarm, category: "Temple", path: "/rameswaram" },
    { name: "Tiruchirappalli", desc: "Famous for the Rockfort Temple and Srirangam Temple.", img: tiruchirappalli, category: "Temple", path: "/tiruchirappalli" },
    { name: "Vellore", desc: "Known for Vellore Fort and educational institutions.", img: vellore, category: "Heritage", path: "/vellore" },
    { name: "Thanjavur", desc: "Rich in cultural heritage, known for Brihadeeswarar Temple.", img: thanjavur, category: "Heritage", path: "/thanjavur" },
    { name: "Coimbatore", desc: "Industrial hub, near Western Ghats with pleasant climate.", img: coimbatore, category: "City", path: "/coimbatore" },
    { name: "Courtallam", desc: "Famous for waterfalls, scenic beauty & serene atmosphere.", img: manimuthar, category: "Waterfalls", path: "/manimuthar" },
    { name: "Tirunelveli", desc: "Famous for waterfalls, scenic beauty & serene atmosphere.", img: thirunelveli, category: "Waterfalls", path: "/thirunelveli" }
  ];

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredPlaces = places.filter((place) => {
    const matchesSearch = place.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || place.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="destinations-container">
      <style>{`
        .destinations-container { padding: 3rem 1.5rem; background-color: #f3f4f6; font-family: 'Arial', sans-serif; }
        .destinations-container h2 { text-align: center; font-size: 2.5rem; font-weight: 700; color: #1f2937; margin-bottom: 2rem; }
        .search-filter { display: flex; justify-content: center; gap: 1rem; margin-bottom: 2rem; flex-wrap: wrap; }
        .search-filter input, .search-filter select { padding: 0.5rem 1rem; border-radius: 8px; border: 1px solid #ccc; font-size: 1rem; }
        .destinations-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; }
        @media (min-width: 768px) { .destinations-grid { grid-template-columns: repeat(3, 1fr); } }
        .destination-card { background-color: #ffffff; border-radius: 1rem; box-shadow: 0 10px 25px rgba(0,0,0,0.1); overflow: hidden; transition: transform 0.4s ease, box-shadow 0.4s ease; }
        .destination-card:hover { transform: translateY(-8px); box-shadow: 0 15px 30px rgba(0,0,0,0.15); }
        .destination-card img { width: 100%; height: 200px; object-fit: cover; }
        .destination-card .card-content { padding: 1rem; }
        .destination-card h3 { font-size: 1.5rem; font-weight: 600; color: #111827; margin-bottom: 0.5rem; }
        .destination-card p { font-size: 1rem; color: #4b5563; line-height: 1.5; }
        .destination-card a { text-decoration: none; color: inherit; }
      `}</style>

      <h2>Top Destinations of Tamil Nadu</h2>

      <div className="search-filter">
        <input
          type="text"
          placeholder="Search destinations..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All Categories</option>
          <option value="City">City</option>
          <option value="Temple">Temple</option>
          <option value="Hill Station">Hill Station</option>
          <option value="Heritage">Heritage</option>
          <option value="Waterfalls">Waterfalls</option>
        </select>
      </div>

      <div className="destinations-grid">
        {filteredPlaces.map((place, index) => (
          <div key={index} className="destination-card">
            <Link to={place.path}>
              <img src={place.img} alt={place.name} />
              <div className="card-content">
                <h3>{place.name}</h3>
                <p>{place.desc}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destinations;
