import React, { useEffect, useState } from "react";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { ticks } from "d3";

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
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        fetch("/Compra_2019_04.txt") 
            .then((response) => response.text())
            .then((text) => {
                const lines = text.split("\n");

                const totalsBySector = {};
                const sectorDescriptions = {}; 
                const MES_ABRIL = "201904";

                lines.forEach((line) => {
                    const columns = line.split("\t");
                    if (columns.length < 10) return;

                    const MES_ANO = columns[0]?.trim();
                    const CNAE = columns[5]?.trim();
                    const DESCRICAO_CNAE = columns[6]?.trim(); 
                    const VALOR_BRUTO = parseFloat(columns[columns.length - 2]);

                    if (MES_ANO === MES_ABRIL) {
                        if (!totalsBySector[CNAE]) {
                            totalsBySector[CNAE] = 0;
                            sectorDescriptions[CNAE] = DESCRICAO_CNAE; 
                        }
                        totalsBySector[CNAE] += VALOR_BRUTO;
                    }
                });

              
                const sortedByValue = Object.entries(totalsBySector)
                    .sort((a, b) => b[1] - a[1])
                    .slice(0, 8); 

                const labels = sortedByValue.map(([cnae]) => sectorDescriptions[cnae] || cnae);
                const dataValues = sortedByValue.map(([, valor]) =>  valor);

                setChartData({
                    labels: labels,
                    datasets: [
                        {
                            label: "Total de Vendas",
                            backgroundColor: "rgba(54, 162, 235, 0.4)",
                            borderColor: "rgb(25,25,112)",
                            data: dataValues
                        },
                    ],
                });
            })
            .catch((error) => console.error("Erro ao carregar o arquivo:", error));
    }, []);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: "top" },
            title: { display: true, text: "Principais setores de vendas no mês de abril" },
        },
        scales: {
            r: {
                ticks:{
                    display: false,
                },
                pointLabels: {
                    callback: function (value, index) {
                        return chartData.datasets[0].data[index].toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                        });
                    },
                },
            },
        },
    };

    return (
        <div style={{ width: "600px", height: "400px" }} id="radar">
            {chartData ? <Radar data={chartData} options={options} /> : <p>Carregando gráfico...</p>}
        </div>
    );
};

export default RadarChart;
