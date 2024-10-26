import React, { useEffect } from 'react';
import { Chart } from 'chart.js/auto';

const CandlestickChart = ({ chartData }) => {
  const canvasRef = React.createRef();

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'candlestick',
      data: {
        datasets: [
          {
            label: 'Candlestick Dataset',
            data: chartData,
          }
        ]
      },
      options: {
        scales: {
          x: { type: 'time' },
          y: { beginAtZero: false },
        },
      },
    });

    return () => chart.destroy();
  }, [chartData]);

  return <canvas ref={canvasRef}></canvas>;
};

export default CandlestickChart;
