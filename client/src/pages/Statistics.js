import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: [
    "la diphtérie",
    "le tétanos",
    "la poliomyélite",
    "la coqueluche",
    "l'hépatite B",
  ],
  datasets: [
    {
      data: [300, 50, 100, 40, 120],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#0054b5", "#b5000f"],
      hoverBackgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56",
        "#0054b5",
        "#b5000f",
      ],
    },
  ],
};

const Statistics = () => {
  return (
    <div>
      <h2>Enfants Vaccinés par type de vaccin</h2>
      <Doughnut data={data} />
    </div>
  );
};

export default Statistics;
