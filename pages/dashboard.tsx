import { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Link from 'next/link';
import Header from 'components/Header';
import Transactions from 'components/Transactions';
import InfoCards from 'components/InfoCards';
import DataChart from 'components/DataChart';
import ToastNotification from 'components/ToastNotification';
const Dashboard = () => {
    // Define the state variables
    const [activeTab, setActiveTab] = useState('dashboard');
    const [tableData, setTableData] = useState([]);
    const [activePage, setActivePage] = useState('dashboard'); // Manage active state at a higher level
    const [showPopup, setShowPopup] = useState(true);

    useEffect(() => {

        const fetchTableData = async () => {
            // Get the JWT token from local storage
            const token = localStorage.getItem('jwt');
            if (!token) {
                console.error('No JWT token found');
                return;
            } else {
                console.log("token: ", token);
            }
            // Fetch table data
            try {
                const response = await axios.get('https://recruitment-api.vercel.app/get-table', {
                    headers: { Authorization: `${token}` }
                });
                console.log('Table data:', response.data.data);
                setTableData(response.data.data);
            } catch (error) {
                console.error('Error fetching table data:', error);
            }
        };

        fetchTableData().catch(console.error);

    }, []);

    return (
        <div>
            {showPopup && (
                <ToastNotification
                    message="Special Offer! Get Complete Free Proxy 10 MB Proxy, without credit card. Start Free Trial"
                    onClose={() => setShowPopup(false)}
                />
            )}
            <div className="container">

                <Sidebar activePage={activePage} />
                <div className="main-content ">
                    <Header />

                    <div >

                        <div className="mb-4 border-b-2 ">
                            <div className="max-w-4xl mx-auto">

                                <ul className="flex flex-wrap -mb-px text-lg font-semibold text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
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
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <div id="default-tab-content">
                                {activeTab === 'proxies' && (
                                    <div id="my-proxies" role="tabpanel" aria-labelledby="my-proxies-tab">
                                        <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content for the <strong className="font-medium text-gray-800 dark:text-white">My Proxies tabs associated content</strong>. </p>
                                    </div>
                                )}

                                {activeTab === 'dashboard' && (
                                    <div id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                                        <InfoCards />

                                        <div className="bg-white p-8 rounded-lg shadow mb-8">
                                            <h3 className="text-lg mb-4 font-bold">Data usage per network</h3>
                                            <DataChart />

                                        </div>
                                        <Transactions data={tableData} />
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Dashboard;
