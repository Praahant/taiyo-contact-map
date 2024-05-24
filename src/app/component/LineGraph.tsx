'use client'
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import axios from 'axios';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineGraph = () => {
    const [country, setCountry] = useState('india');
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                label: 'COVID-19 Cases',
                data: [],
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.6)',
                borderColor: 'rgba(75,192,192,1)',
                tension: 0.1,
            },
        ],
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://disease.sh/v3/covid-19/historical/${country}?lastdays=30`);
                if (response.data.timeline) {
                    const { timeline } = response.data;
                    const dates = Object.keys(timeline.cases);
                    const cases = Object.values(timeline.cases);

                    setChartData({
                        labels: dates,
                        datasets: [
                            {
                                label: 'COVID-19 Cases',
                                data: cases,
                                fill: false,
                                backgroundColor: 'rgba(75,192,192,0.6)',
                                borderColor: 'rgba(75,192,192,1)',
                                tension: 0.1,
                            },
                        ],
                    });
                } else {
                    console.error('Timeline data not available');
                }
            } catch (error) {
                console.error('Error fetching historical data:', error);
            }
        };

        if (country) {
            fetchData();
        }
    }, [country]);

    return (
        <div>
            <h2 className="text-center font-bold text-xl py-8">COVID-19 Cases Fluctuations</h2>
            <div className="text-center mb-4">
                <label htmlFor="country" className="mr-2">Inter Country Name: </label>
                <input
                    id="country"
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value.toLowerCase())}
                    className="border rounded px-2 py-1"
                />
            </div>
            <div className="lg:w-[60%] sm:w-[80%] m-auto p-2">
                <Line data={chartData} />
            </div>
        </div>
    );
};

export default LineGraph;
