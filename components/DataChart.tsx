import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

//Using ChartJS to create a line chart


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

//Data for the chart
const DataChart = () => {
    const data = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],

        datasets: [
            {
                label: "Data",
                data: [1.1, 2.5, 5.5, 5.6, 6.6, 7.6, 9.6],
                fill: true,
                backgroundColor: "border: 3px solid #1C1C1C",
                borderColor: "border: 3px solid #1C1C1C",
                borderWidth: 6,
                tension: 0.5
            }
        ],

    };

    return <div style={{height: '%100'}}>
        <Line data={data} />
    </div>;
};

export default DataChart;
