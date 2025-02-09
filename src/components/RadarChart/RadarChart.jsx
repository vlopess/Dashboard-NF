import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from "react-chartjs-2";

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Title,
    Tooltip,
    Legend
);

const RadarChart = () => {
    const labels = ["January", "February", "March", "April", "May", "June", "July"];
    const data = {
        labels: labels,
        datasets: [
            {
                label: "My First dataset",
                backgroundColor: "rgba(255, 255, 132, 0.2)",
                data: [0, 10, 5, 2, 20, 30, 40],
            },
            {
                label: "My Second dataset",
                backgroundColor: "rgba(255, 33, 132, 0.2)",
                data: [5, 15, 10, 8, 25, 35, 45],
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
                text: 'Radar Chart Example',
            },
        },
    };

    return (
        <div style={{ width: '800px', height: '400px' }}>
            <Radar data={data} options={options} />
        </div>
    );
};

export default RadarChart;