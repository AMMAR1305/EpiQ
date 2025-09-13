import React, { useState } from "react";

// Sample data for Ooty
const OotyData = {
  name: "Ooty",
  description:
    "Ooty (Udhagamandalam) is a picturesque hill station in the Nilgiris, known as the 'Queen of Hill Stations'. Famous for its natural beauty, tea plantations, and pleasant climate, it attracts tourists all year round.",

  photos: [
    "https://upload.wikimedia.org/wikipedia/commons/6/68/Ooty_Lake.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/d/dc/Ooty_Botanical_Gardens.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/3/3b/Doddabetta_peak.jpg"
  ],

  favoriteSpots: [
    "Government Botanical Garden",
    "Ooty Lake",
    "Doddabetta Peak",
    "Rose Garden",
    "Nilgiri Mountain Railway",
    "Pykara Lake",
    "Tea Museum",
    "Avalanche Lake",
    "Emerald Lake"
  ],

  busInfo: {
    from: ["Ooty Central Bus Stand", "Coonoor", "Mettupalayam"],
    availableRoutes: [
      "Ooty Central Bus Stand → Thunder World → Boat House → Botanical Garden → Rose Park → Doddabetta Peak → Tea Park → Tea Museum"
    ],
    notes: "Circuit buses cover major attractions and are very affordable."
  },

  travelRoutes: {
    Bus: [
      "Use the Ooty circuit sightseeing bus from the Central Bus Stand. It covers Botanical Gardens, Ooty Lake, Doddabetta Peak, Rose Garden, Tea Museum, and more."
    ],
    "Bike/Car": [
      "Enjoy flexible travel: Charring Cross → Botanical Garden → Ooty Lake → Rose Garden → Doddabetta Peak. Roads are well-marked, and scenic stops abound.",
      "For hidden spots like Emerald or Avalanche Lake, follow signs from the city outskirts."
    ]
  },

  hiddenSpots: [
    "Emerald Lake: About 25 km from Ooty, pristine and less crowded.",
    "Avalanche Lake: Beautiful and ideal for trekking/camping.",
    "Parsons Valley: Quiet, in the Nilgiri Biosphere Reserve."
  ],

  gardensAndParks: [
    "Government Botanical Garden",
    "Rose Garden",
    "Deer Park",
    "Tea Park",
    "Sim's Park (Coonoor, nearby)"
  ]
};

export default function TourismManagementSystem() {
  const [place] = useState("Ooty");
  const data = OotyData;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>{data.name} - Tourism Management System</h1>

      <section>
        <h2>About {data.name}</h2>
        <p>{data.description}</p>
      </section>

      <section>
        <h2>Picturization</h2>
        <div style={{ display: "flex", gap: 10 }}>
          {data.photos.map((url, idx) => (
            <img
              key={idx}
              src={url}
              alt={`Ooty view ${idx + 1}`}
              style={{ width: 200, borderRadius: 8 }}
            />
          ))}
        </div>
      </section>

      <section>
        <h2>Favorite Spots</h2>
        <ul>
          {data.favoriteSpots.map((spot, idx) => (
            <li key={idx}>{spot}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Bus Availability & Routes</h2>
        <strong>From:</strong>
        <ul>
          {data.busInfo.from.map((loc, idx) => (
            <li key={idx}>{loc}</li>
          ))}
        </ul>
        <strong>Popular Bus Route:</strong>
        <ul>
          {data.busInfo.availableRoutes.map((route, idx) => (
            <li key={idx}>{route}</li>
          ))}
        </ul>
        <p>
          <em>{data.busInfo.notes}</em>
        </p>
      </section>

      <section>
        <h2>Tourist Spots in Ooty</h2>
        <ul>
          {data.favoriteSpots.map((spot, idx) => (
            <li key={idx}>{spot}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Travel Routes</h2>
        <div>
          <strong>By Bus:</strong>
          <ul>
            {data.travelRoutes["Bus"].map((r, idx) => (
              <li key={idx}>{r}</li>
            ))}
          </ul>
          <strong>By Bike or Car:</strong>
          <ul>
            {data.travelRoutes["Bike/Car"].map((r, idx) => (
              <li key={idx}>{r}</li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <h2>Hidden Spots in Ooty</h2>
        <ul>
          {data.hiddenSpots.map((spot, idx) => (
            <li key={idx}>{spot}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Gardens and Parks</h2>
        <ul>
          {data.gardensAndParks.map((park, idx) => (
            <li key={idx}>{park}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
