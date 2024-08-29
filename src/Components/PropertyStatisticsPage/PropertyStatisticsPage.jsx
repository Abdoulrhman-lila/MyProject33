import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import './Manger.css'; // Reuse the same CSS styles from the user statistics page

function PropertyStatisticsPage() {
    const [propertyStats, setPropertyStats] = useState({
        totalProperties: 0,
        propertiesByCondition: {},
        averagePrice: 0,
        propertiesByLocation: {},
        propertiesByGrade: {},
        propertiesByBedroom: {},
    });

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/getPropertyStatistics')
            .then(response => {
                setPropertyStats(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the statistics!", error);
            });
    }, []);

    const pieDataCondition = {
        labels: Object.keys(propertyStats.propertiesByCondition),
        datasets: [
            {
                label: '# of Properties by Condition',
                data: Object.values(propertyStats.propertiesByCondition),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const barDataLocation = {
        labels: Object.keys(propertyStats.propertiesByLocation),
        datasets: [
            {
                label: 'Properties by Location',
                data: Object.values(propertyStats.propertiesByLocation),
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };

    const barDataGrade = {
        labels: Object.keys(propertyStats.propertiesByGrade),
        datasets: [
            {
                label: 'Properties by Grade',
                data: Object.values(propertyStats.propertiesByGrade),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const barDataBedroom = {
        labels: Object.keys(propertyStats.propertiesByBedroom),
        datasets: [
            {
                label: 'Properties by Bedroom',
                data: Object.values(propertyStats.propertiesByBedroom),
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="manager-page">
            <div className="sidebar">
                <h2>Manager Dashboard</h2>
                <ul>
                    <li><a href="/manager">User Statistics</a></li>
                    <li><a href="/propertyStatisticsPage">Property Statistics</a></li>
                </ul>
            </div>

            <div className="content">
                <h1>Property Statistics</h1>
                <div className='user_charts'>
                    <div className="chart-container">
                        <h3>Properties by Condition</h3>
                        <Pie data={pieDataCondition} />
                    </div>

                    <div className="chart-container">
                        <h3>Properties by Location</h3>
                        <Bar data={barDataLocation} />
                    </div>

                    <div className="chart-container">
                        <h3>Properties by Grade</h3>
                        <Bar data={barDataGrade} />
                    </div>

                    <div className="chart-container">
                        <h3>Properties by Bedroom Count</h3>
                        <Bar data={barDataBedroom} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PropertyStatisticsPage;
