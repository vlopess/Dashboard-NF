import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';
import { PolarArea} from "react-chartjs-2";


ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Filler,
    Title,
    Tooltip,
    Legend
);


const PolarChart = () =>{
const DATA_COUNT = 5;
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

const labels = ['Red', 'Orange', 'Yellow', 'Green', 'Blue'];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: Array.from({ length: DATA_COUNT }, () => Math.floor(Math.random() * 100)), 
      backgroundColor: [
        'rgb(25,25,112)',
        'rgb(0,0,128)',
        'rgb(0,0,255)',
        'rgba	(0,0,205)',
        'rgba(54, 162, 235, 0.5)',
      ],
   
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
            text: 'Radar Chart Example',
        },
    },
};

return (
    <div style={{ width: '650px', height: '400px' }} id='polar'>
        <PolarArea data={data} options={options} />
    </div>
);

};

export default PolarChart;