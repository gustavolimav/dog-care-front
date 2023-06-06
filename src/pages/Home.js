// Home.js
import React, { useState, useEffect } from "react";
import { getData } from "../data/data";

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const result = await getData();
      setData(result);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = () => {
    setLoading(true);
    fetchData();
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>No data available.</p>;
  }

  const dataRefs = [
    "Led Vermelha",
    "Led Amarela",
    "Led Verde",
    "Buzzer",
    "Microfone",
  ];

  return (
    <div className="home-container">
      {data.map((value, index) => (
        <div key={index} className="data-item">
          {dataRefs[index] !== "Microfone" ? (
            <h1>
              {dataRefs[index]}:{" "}
              <span className={value ? "led-on" : "led-off"}>
                {value ? "ON" : "OFF"}
              </span>
            </h1>
          ) : (
            <h1>
              {dataRefs[index]}: <span className="mic-value">{value}</span>
            </h1>
          )}
        </div>
      ))}

      <div className="refresh-button">
        <button onClick={handleRefresh}>Refresh</button>
      </div>
    </div>
  );
};

export default Home;
