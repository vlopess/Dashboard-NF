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
import { Pie } from "react-chartjs-2";


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


const PieChart = () =>{
    const data = {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(0,0,255)',
            'rgb(65,105,225)',
            'rgb(25,25,112)'
          ],
          hoverOffset: 4
        }]
      };
const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Pie Chart Example',
        },
    },
};

return (
    <div style={{ width: '800px', height: '400px' }} id='pizza'>
        <Pie data={data} options={options} />
    </div>
);

};

export default PieChart;