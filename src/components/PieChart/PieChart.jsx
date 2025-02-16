import React, { useEffect, useState } from "react";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const PieChartICMS = () => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        fetch("/Compra_2019_01.txt")
            .then((response) => response.text())
            .then((text) => {
                const lines = text.split("\n");
                const icmsByState = {};

                lines.forEach((line) => {
                    const columns = line.split("\t");
                    if (columns.length < 10) return;

                    const estadoOrigem = columns[1]?.trim();
                    const icms = parseFloat(columns[columns.length - 1]); 

                    if (!isNaN(icms)) {
                        if (!icmsByState[estadoOrigem]) {
                            icmsByState[estadoOrigem] = 0;
                        }
                        icmsByState[estadoOrigem] += icms;
                    }
                });

              
                const sortedByICMS = Object.entries(icmsByState).sort((a, b) => b[1] - a[1]);

              
                const top10 = sortedByICMS.slice(0, 10);

                const labels = top10.map(([estado]) => estado);
                const dataValues = top10.map(([_, icms]) => icms);

                const backgroundColors = [
                    "rgb(0,0,255)",     
                    "rgb(25,25,112)",   
                    "rgb(65,105,225)",  
                    "rgb(70,130,180)",  
                    "rgb(72,61,139)",   
                    "rgb(100,149,237)", 
                    "rgb(135,206,250)", 
                    "rgb(106,90,205)",  
                    "rgb(147,112,219)", 
                    "rgb(0,255,255)"    
                ];

                setChartData({
                    labels: labels,
                    datasets: [
                        {
                            label: "ICMS Gerado",
                            data: dataValues,
                            backgroundColor: backgroundColors,
                            hoverOffset: 4,
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
            title: { display: true, text: "Estados que mais geram ICMS nas vendas" },
        },
    };

    return (
        <div style={{ width: "600px", height: "400px" }} id="pizza">
            {chartData ? <Pie data={chartData} options={options} /> : <p>Carregando gráfico...</p>}
        </div>
    );
};

export default PieChartICMS;
