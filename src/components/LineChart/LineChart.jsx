import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const LineChart = () => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        fetch("/Compra_2019_01.txt")
            .then((response) => response.text())
            .then((text) => {
                const lines = text.split("\n");

                const totalsByState = {};
                const DESTINO_BA = "BA";

                lines.forEach((line) => {
                    const columns = line.split("\t");
                    if (columns.length < 10) return;

                    const estadoFornecedor = columns[1]?.trim(); 
                    const estadoDestino = columns[3]?.trim(); 
                    const valorBruto = parseFloat(columns[columns.length - 2]); 

                    if (estadoDestino === DESTINO_BA && estadoFornecedor !== "BA") {
                        if (!totalsByState[estadoFornecedor]) {
                            totalsByState[estadoFornecedor] = 0;
                        }
                        totalsByState[estadoFornecedor] += valorBruto;
                    }
                });

             
                const sortedEntries = Object.entries(totalsByState).sort((a, b) => b[1] - a[1]);

                
                const top10 = sortedEntries.slice(0, 10);

               
                const uniqueLabels = Array.from(new Set(top10.map(([estado]) => estado)));

                const labels = uniqueLabels;
                const dataValues = labels.map((estado) => totalsByState[estado]);

                setChartData({
                    labels: labels,
                    datasets: [
                        {
                            label: "Total Bruto Vendido para a Bahia",
                            borderColor:  "rgb(25,25,112)",
                            backgroundColor: "rgba(54, 162, 235, 0.2)",
                            borderWidth: 2,
                            pointRadius: 5,
                            data: dataValues,
                        },
                    ],
                });
            })
            .catch((error) => console.error("Erro ao carregar o arquivo:", error));
    }, []);

    const options = {
        responsive: true,
        plugins: {
            legend: { position: "top" },
            title: { 
                display: true, 
                text: "Estados que mais fornecem mercadorias para a Bahia, baseado no total bruto",
            },
            tooltip: {
                enabled: true,
                callbacks: {
                    label: (item) => {
                        return `Valor Bruto: ${item.raw.toLocaleString("pt-BR", {style: "currency", currency: "BRL",})}`;
                    },
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: "black", 
                    font: { size: 12, weight: 'bold' },
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function (value) {
                        return value.toLocaleString();
                    }
                }
            }
        }
    };

    return (
        <div style={{ width: "600px", height: "400px" }} id="linha">
            {chartData ? <Line data={chartData} options={options} /> : <p>Carregando gráfico...</p>}
        </div>
    );
};

export default LineChart;
