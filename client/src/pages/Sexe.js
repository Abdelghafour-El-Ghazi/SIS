import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Fille", "Garçon"],
  datasets: [
    {
      data: [100, 50],
      backgroundColor: ["#FF6384", "#36A2EB"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB"],
    },
  ],
};

const Sexe = () => {
  return (
    <div>
      <h2>Enfants Vaccinés par type de vaccin</h2>
      <Doughnut data={data} />
    </div>
  );
};

export default Sexe;
