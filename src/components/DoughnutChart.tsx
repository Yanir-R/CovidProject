import React from "react";
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';
export const DoughnutChart: React.FC<any> = ({
  covidGlobalData,
}) => {

  ChartJS.register(ArcElement, Tooltip, Legend);

     
      const labels = ['NewConfirmed', 'NewDeaths', 'NewRecovered ', 'TotalConfirmed ', 'TotalDeaths ', 'TotalRecovered ']

      const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: [covidGlobalData.NewConfirmed, covidGlobalData.NewDeaths,covidGlobalData.NewRecovered, covidGlobalData.TotalConfirmed, covidGlobalData.TotalDeaths, covidGlobalData.TotalRecovered  ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      }

  return (
    <>
    

      <Doughnut  data={data} />    
     
    </>
  );
};
