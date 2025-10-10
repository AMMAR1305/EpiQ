import React from "react";

const DistrictTemplate = ({
  image,
  district,
  about,
  attractions,
  cuisines,
  resorts,
  festivals,
  reach,
}) => {
  return (
    <div className="district-page">
      <div className="district-header">
        <img src={image} alt={district} className="district-image" />
        <h1 className="district-title">{district}</h1>
      </div>

      <div className="district-content">
        <h2>About {district}</h2>
        <p>{about}</p>

        {attractions && attractions.length > 0 && (
          <>
            <h2>Top Attractions</h2>
            <ul>
              {attractions.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </>
        )}

        {cuisines && cuisines.length > 0 && (
          <>
            <h2>Famous Cuisines</h2>
            <ul>
              {cuisines.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </>
        )}

        {resorts && resorts.length > 0 && (
          <>
            <h2>Resorts & Accommodation</h2>
            <ul>
              {resorts.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </>
        )}

        {festivals && festivals.length > 0 && (
          <>
            <h2>Festivals</h2>
            <ul>
              {festivals.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </>
        )}

        {reach && reach.length > 0 && (
          <>
            <h2>How to Reach {district}</h2>
            <ul>
              {reach.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default DistrictTemplate;
