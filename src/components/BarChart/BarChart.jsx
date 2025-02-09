import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChart = () => {
    const labels = ["January", "February", "March", "April", "May", "June"];
    const data = {
        labels: labels,
        datasets: [
            {
                label: "My First dataset",
                backgroundColor: "rgb(255, 255, 132)",
                borderColor: "rgb(255, 33, 132)",
                data: [0, 10, 5, 2, 20, 30], // Match the length of labels
            },
            {
                label: "My Second dataset",
                backgroundColor: "rgb(255, 33, 132)",
                borderColor: "rgb(255, 33, 132)",
                data: [0, 10, 5, 2, 20, 30], // Match the length of labels
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Bar Chart Example',
            },
        },
    };

    return (
        <div style={{ width: '800px', height: '400px' }}>
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;