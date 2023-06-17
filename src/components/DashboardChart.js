import React from 'react';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Colors
  } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    Colors
);

export default function DashboardChart() {
    const data = {
         labels: [
          "Technology",
          "Financial Services",
          "Healthcare",
          "Communication Services"
        ],
        datasets: [{
          label: "Followed Stocks",
          data: [6, 1, 2, 3],
          hoverOffset: 4
        }]
    };

    const options = {
        responsive: true
    };

    return (
        <div style={{width: "90%"}}>
            <Doughnut data={data} options={options} />
        </div>
    );
}