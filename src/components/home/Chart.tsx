"use client";
import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { IHome } from "./Home";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Dashbaord Statistics",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const Chart: React.FC<IHome> = ({ userNumbers, postNumbers }) => {
  const data = {
    labels,
    datasets: [
      {
        label: "users",
        data: [userNumbers],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "posts",
        data: [postNumbers],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return <Bar options={options} data={data} className="h-64" />;
};

export default Chart;
