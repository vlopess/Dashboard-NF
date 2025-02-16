import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        fetch("/Compra_2019_01.txt")
            .then((response) => response.text())
            .then((text) => {
                const lines = text.split("\n");

                const totalsByType = {};
                const BA = 'BA';

                lines.forEach((line) => {
                    const columns = line.split("\t");
                    if (columns.length < 10) return;

                    const ESTADO = columns[1]?.trim();
                    const VALOR_BRUTO = parseFloat(columns[columns.length - 2]);

                    if (columns[3]?.trim() === BA) {
                        if (!totalsByType[ESTADO]) {
                            totalsByType[ESTADO] = 0;
                        }
                        totalsByType[ESTADO] += VALOR_BRUTO;
                    }
                });

                const entries = Object.entries(totalsByType);

                const sortedByValue = entries.sort((a, b) => b[1] - a[1]);

                const top10 = sortedByValue.slice(0, 10);

                const labels = top10.map(([estado]) => estado);
                const datasets = [];

                top10.forEach(([key, valor]) => {
                    const cor = Math.floor(Math.random() * 255);
                    const backgroundColor = `rgb(0,0,${cor})`;

                    const data = labels.map((label) => (label === key ? valor : 0));

                    datasets.push({
                        label: key,
                        backgroundColor: backgroundColor,
                        borderColor: "rgb(25,25,112)",
                        data: data,
                    });
                });

                setChartData({
                    labels: labels,
                    datasets: datasets,
                });
            })
            .catch((error) => console.error("Erro ao carregar o arquivo:", error));
    }, []);

    const options = {
        responsive: true,
        plugins: {
            legend: { position: "top" },
            title: { display: true, text: "Estados que mais compram da Bahia" },
        },
    };

    return (
        <div style={{  width: "600px", height: "400px"}} id="barra">
            {chartData ? <Bar data={chartData} options={options} /> : <p>Carregando gráfico...</p>}
        </div>
    );
};

export default BarChart;