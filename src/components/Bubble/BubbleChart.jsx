import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bubble } from "react-chartjs-2";

ChartJS.register(
    LinearScale,
    PointElement,
    Tooltip,
    Legend
);

const BubbleChart = () => {
    const generateRandomBubbles = (count) => {
        return Array.from({ length: count }, () => ({
            x: Math.random() * 100, // Valores aleatórios entre 0 e 100
            y: Math.random() * 100,
            r: Math.random() * 15 + 5 // Tamanho do ponto (entre 5 e 20)
        }));
    };

    const data = {
        datasets: [
            {
                label: 'Dataset 1',
                data: generateRandomBubbles(7),
                borderColor: 'red',
                backgroundColor: 'rgb(0,0,255)',
            },
            {
                label: 'Dataset 2',
                data: generateRandomBubbles(7),
                borderColor: 'orange',
                backgroundColor: 'rgb(25,25,112)',
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Bubble Chart Example',
            },
        },
    };

    return (
        <div style={{ width: '800px', height: '400px' }} id='bolha'>
            <Bubble data={data} options={options} />
        </div>
    );
};

export default BubbleChart;
