import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function LineStylesDemo({ chartData, chartPercentage }) {
    const [chartOptions, setChartOptions] = useState({});
    
    // Define chartColor based on chartPercentage
    const chartColor = chartPercentage >= 50 ? 'rgba(0, 255, 0, 1)' : 'rgba(255, 0, 0, 1';

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    display: false, // Hide legend
                },
                beforeDraw: (chart) => {
                    const ctx = chart.ctx;
                    const xAxis = chart.scales.x;
                    const yAxis = chart.scales.y;

                    // Remove scale lines and labels
                    xAxis.grid.draw = function () {};
                    yAxis.grid.draw = function () {};
                },
            },
            scales: {
                x: {
                    display: false, // Hide x-axis
                },
                y: {
                    display: false, // Hide y-axis
                },
            },
        };

        setChartOptions(options);
    }, [chartPercentage]);

    return (
        <div className="small-card">
            <div>
                <Chart type="line" data={chartData} options={chartOptions} style={{ width: '200px', height: '80px', borderColor: chartColor }} />
            </div>
        </div>
    );
}
