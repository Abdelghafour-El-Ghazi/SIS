import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["2019", "2020"],
  datasets: [
    {
      label: "Enfants vaccinés par mois",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [650, 550, 80],
    },
  ],
};

const StatsYear = () => {
  return (
    <div>
      <h2>Enfants vaccinés par ans</h2>
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

export default StatsYear;
