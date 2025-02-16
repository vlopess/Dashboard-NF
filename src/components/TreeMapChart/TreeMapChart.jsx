import React, { useEffect, useState } from "react";
import { Chart as ChartJS, Tooltip, Legend } from "chart.js";
import { TreemapController, TreemapElement } from "chartjs-chart-treemap";
import { Chart } from "react-chartjs-2";

ChartJS.register(TreemapController, TreemapElement, Tooltip, Legend);

const TreemapChart = () => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        fetch("/Venda_2019_01.txt")
            .then((response) => response.text())
            .then((text) => {
                const lines = text.split("\n");
                const totalsByCNAE = {};

                lines.forEach((line) => {
                    const columns = line.split("\t");
                    if (columns.length < 10) return;

                    const CNAE = columns[6]?.trim();
                    const VALOR_BRUTO = parseFloat(columns[columns.length - 2]);

                    if (!CNAE || isNaN(VALOR_BRUTO)) return;

                    if (!totalsByCNAE[CNAE]) {
                        totalsByCNAE[CNAE] = 0;
                    }
                    totalsByCNAE[CNAE] += VALOR_BRUTO;
                });

                const sortedByValue = Object.entries(totalsByCNAE).sort((a, b) => b[1] - a[1]);
                const top10 = sortedByValue.slice(0, 10);

                const tree = top10.map(([key, valor]) => ({
                    category: key,
                    value: valor
                }));
                console.log(tree)

                setChartData({
                    datasets: [
                        {
                            label: "Setores econômicos relevantes nas vendas",
                            tree: tree,
                            key: "value",
                            backgroundColor: (ctx) => {
                                const colors = ["#6495ED", "#7B68EE", "#4169E1", "#0000FF", "#000080"];
                                return colors[ctx?.dataIndex % colors.length] || "#000";
                            },
                            borderWidth: 2,
                            borderColor: "#fff",
                        },
                    ],
                });
            })
            .catch((error) => console.error("Erro ao carregar o arquivo:", error));
    }, []);

    const options = {
        plugins: {
            tooltip: {
                enabled: true,
                callbacks: {
                    title: (items) => {
                        const item = items[0];
                        return item.raw._data.category;
                    },
                    label: (item) => {
                        return `Valor Bruto: ${item.raw.v.toLocaleString("pt-BR", {style: "currency", currency: "BRL",})}`;
                    },
                },
            },
        },
    };


    if (!chartData) return <p>Carregando...</p>;

    return (
        <div style={{ width: "600px", height: "400px" }}>
            <Chart type="treemap" data={chartData} options={options} />
        </div>
    );
};

export default TreemapChart;
