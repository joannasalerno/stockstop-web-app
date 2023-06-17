import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useWeeklyData } from "./WeeklyData.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function WeeklyClosingsChart(stock) {
  const allWeeklyData = useWeeklyData(stock);

  // checking whether labels contains data - if so, reverse the order of labels & if not, return a null list
  const labels = allWeeklyData.labels?.reverse() ?? []; 

  const data = {
    labels,
    datasets: [
      {
          label: `${stock} Weekly Closing Prices`,
          data: allWeeklyData.timePoints,
          borderColor: "#2b6777",
          backgroundColor: "#2b6777",
          fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Date",
          font: {
            size: 16,
          },
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 15,
          font: {
            size: 12,
          },
        },
        border: {
          color: "#52ab98",
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Adjusted Closing Price ($USD)",
          font: {
            size: 16,
          },
        },
        border: {
          color: "#52ab98",
        },
        ticks: {
          font: {
            size: 12,
          },
          callback: function(value, index, ticks) {
            return '$' + value; }
        },
      },
    },
  };

  return (
    <Line options={options} data={data}/>
  );
}