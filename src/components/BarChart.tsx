import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: "Chart.js Bar Chart - Stacked",
    },
  },
  responsive: true,

  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
      decimals: 0,
      min: 10000,
      max: 20000000,
    },
  },
};

export const BarChart: React.FC<any> = ({ covidCountriesData }) => {
  const labels = covidCountriesData.map((countryInfo: any) => {
    return countryInfo.Country;
  });

  const data = {
    labels,
    datasets: [
      {
        label: "Total Death",
        data: covidCountriesData.map((totalDeathInfo: any) => {
          return totalDeathInfo.TotalDeaths;
        }),
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        label: "New Confirmed",
        data: covidCountriesData.map((totalNewConfirmedInfo: any) => {
          return totalNewConfirmedInfo.NewConfirmed;
        }),
        backgroundColor: "rgb(75, 192, 192)",
      },
      {
        label: "Total Confirmed",
        data: covidCountriesData.map((totalConfirmedInfo: any) => {
          return totalConfirmedInfo.TotalConfirmed;
        }),
        backgroundColor: "rgb(53, 162, 235)",
      },
    ],
  };

  return (
    <div>
      <Bar options={options} data={data} width="1500" height="600" />
    </div>
  );
};
