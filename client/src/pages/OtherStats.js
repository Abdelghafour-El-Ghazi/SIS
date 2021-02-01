import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: [
    "Janvier",
    "Fevrier",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Decembre",
  ],
  datasets: [
    {
      label: "Enfants vaccinés par mois",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 45, 30, 46, 34, 24, 42, 44, 21],
    },
  ],
};

const OtherStats = () => {
  return (
    <div>
      <h2>Enfants vaccinés par mois</h2>
      <Bar
        data={data}
        width={100}
        height={400}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default OtherStats;
