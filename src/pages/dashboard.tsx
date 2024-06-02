import { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Link from 'next/link';
import Header from '@/components/Header';

const Dashboard = () => {
    const [data, setData] = useState(null);
    const [activeTab, setActiveTab] = useState('dashboard');

    useEffect(() => {
        
        const fetchTableData = async () => {
            const token = localStorage.getItem('jwt');
            if (!token) {
                console.error('No JWT token found');
                return;
            }

            try {
                const response = await axios.get('https://recruitment-api.vercel.app/get-table', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                console.log('Table data:', response.data);
            } catch (error) {
                console.error('Error fetching table data:', error);
            }
        };

        fetchTableData().catch(console.error);

    }, []);

    return (
        <div className="flex">
            <Sidebar />
            <div className="ml-32 flex-grow p-8 bg-gray-100 min-h-screen">
                <Header />
                <div className="mb-4 border-b">
                    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                        <li className="me-2" role="presentation">
                            <button
                                className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'proxies' ? 'text-blue-600 border-blue-600' : 'hover:text-blue-600 hover:border-blue-600'}`}
                                id="my-proxies-tab"
                                type="button"
                                role="tab"
                                aria-controls="my-proxies"
                                aria-selected={activeTab === 'proxies'}
                                onClick={() => setActiveTab('proxies')}
                            >
                                My Proxies
                            </button>
                        </li>
                        <li role="presentation">
                            <button
                                className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'dashboard' ? 'text-blue-600 border-blue-600' : 'hover:text-blue-600 hover:border-blue-600'}`}
                                id="dashboard-tab"
                                type="button"
                                role="tab"
                                aria-controls="dashboard"
                                aria-selected={activeTab === 'dashboard'}
                                onClick={() => setActiveTab('dashboard')}
                            >
                                Dashboard
                            </button>
                        </li>
                    </ul>
                </div>
                <div id="default-tab-content">
                    {activeTab === 'proxies' && (
                        <div id="my-proxies" role="tabpanel" aria-labelledby="my-proxies-tab">
                            <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content for the <strong className="font-medium text-gray-800 dark:text-white">My Proxies tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                        </div>
                    )}

                    {activeTab === 'dashboard' && (
                        <div id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                                <div className="bg-white p-8 rounded-lg h-30 w-full flex flex-col justify-center ">
                                    <h4 className="text-base">Subscription expires on</h4>
                                    <p className="text-2xl">July 23, 2023</p>
                                </div>
                                <div className="bg-white p-8 rounded-lg h-30 w-full flex flex-col justify-center">
                                    <h3 className="text-base">Last charge</h3>
                                    <div className="flex-row items-center">
                                    <p className="text-2xl">$50 </p>
                                    <p className="text-sm">on July 23, 2022</p>
                                    </div>
                                </div>
                                <div className="bg-white p-8 rounded-lg h-30 w-full flex flex-col justify-center">
                                    <h3 className="text-base">Total Usage Data</h3>
                                    <p className="text-2xl font-bold">36.025 GB</p>
                                </div>
                                <div className="bg-white p-8 rounded-lg h-30 w-full flex flex-col justify-center">
                                    <h3 className="text-base">Daily Usage Data</h3>
                                    <p className="text-2xl font-bold">1.025 GB</p>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow mb-8">
                                <h3 className="text-lg mb-4 font-bold">Data usage per network</h3>
                                {/* Add Chart Component here */}
                            </div>

                            {/* Transactions History Table */}
                            <div className="bg-white p-8 rounded-lg shadow">
                                <h3 className="text-lg mb-4">Transactions History</h3>
                                <table className="min-w-full">
                                    <thead>
                                        <tr>
                                            <th className="border-b-2 p-4 text-left">Type</th>
                                            <th className="border-b-2 p-4 text-left">Location</th>
                                            <th className="border-b-2 p-4 text-left">Rental Period</th>
                                            <th className="border-b-2 p-4 text-left">Number of IP</th>
                                            <th className="border-b-2 p-4 text-left">Specific Purpose</th>
                                            <th className="border-b-2 p-4 text-left">Date</th>
                                            <th className="border-b-2 p-4 text-left">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* Map through your transactions data to render rows */}
                                        <tr>
                                            <td className="border-b p-4">Buy</td>
                                            <td className="border-b p-4">Worldwide Mix</td>
                                            <td className="border-b p-4">1 Week</td>
                                            <td className="border-b p-4">10</td>
                                            <td className="border-b p-4">Instagram</td>
                                            <td className="border-b p-4">13 Dec 2020</td>
                                            <td className="border-b p-4">
                                                <button className="text-blue-600">Actions</button>
                                            </td>
                                        </tr>
                                        {/* Add more rows as needed */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                </div>

            </div>
        </div>

    );
};

export default Dashboard;
