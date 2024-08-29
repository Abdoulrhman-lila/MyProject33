import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar, Pie, Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './Manager.css';

function StatisticsPage() {
    const [userStats, setUserStats] = useState({
        totalUsers: 0,
        activeUsers: 0,
        usersWithProperties: 0,
        userTypes: {}, // For pie chart
        registrationsOverTime: [], // For line chart
    });

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/getUserStatistics')
            .then(response => {
                setUserStats(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the statistics!", error);
            });
    }, []);

    const pieData = {
        labels: Object.keys(userStats.userTypes),
        datasets: [
            {
                label: '# of Users',
                data: Object.values(userStats.userTypes),
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

    const barData = {
        labels: ['Total Users', 'Active Users', 'Users with Properties'],
        datasets: [
            {
                label: 'Number of Users',
                data: [userStats.totalUsers, userStats.activeUsers, userStats.usersWithProperties],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const lineData = {
        labels: userStats.registrationsOverTime.map(stat => stat.date),
        datasets: [
            {
                label: 'Registrations Over Time',
                data: userStats.registrationsOverTime.map(stat => stat.count),
                fill: false,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
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
                <h1>User Statistics</h1>
                <div className='user_charts'>
                    <div className="chart-container">
                    <h3>User Types</h3>
                    <Pie data={pieData} />
                </div>

                <div className="chart-container">
                    <h3>User Counts</h3>
                    <Bar data={barData} />
                </div>

                <div className="chart-container">
                    <h3>Registrations Over Time</h3>
                    <Line data={lineData} />
                </div>
                </div>
              
            </div>
        </div>
    );
}

export default StatisticsPage;
