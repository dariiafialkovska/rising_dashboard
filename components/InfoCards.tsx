import React, { useEffect, useState } from 'react';
import axios from 'axios';

//Formatting GB data
function formatDataUsage(number: number): string {
    return `${(number / 1000).toFixed(3)} GB`;  // Divide by 1000 and fix to 3 decimal places
}

const InfoCards = () => {
    // State to store info data
    const [infoData, setInfoData] = useState({
        dailyUsageData: 0,
        expireTime: '',
        lastCharge: '',
        lastChargeAmount: 0,
        totalDataUsage: 0

    });

    useEffect(() => {
        const fetchInfoData = async () => {
            const token = localStorage.getItem('jwt');
            // Check if token is available
            if (!token) {
                console.error('No JWT token found');
                return;
            }
            // Fetch info data
            try {
                const response = await axios.get('https://recruitment-api.vercel.app/get-info', {
                    headers: { Authorization: `${token}` }
                });
                // Set info data
                setInfoData({
                    dailyUsageData: response.data.dailyUsage,
                    expireTime: response.data.expireTime,
                    lastCharge: response.data.lastCharge,
                    lastChargeAmount: response.data.lastChargeAmount,
                    totalDataUsage: response.data.totalDataUsage

                });
            } catch (error) {
                console.error('Error fetching info data:', error);
            }
        };

        fetchInfoData();
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-14 mt-14">

            <div className=" p-8 rounded-2xl h-30 w-full flex flex-col justify-center  bg-sky-100 " >
                <h4 className="text-base">Subscription Expires On</h4>
                <p className="text-2xl">{infoData.expireTime}</p>
            </div>
            <div className="p-8 rounded-2xl h-30 w-full flex flex-col justify-center bg-slate-200">
                <h3 className="text-base">Last Charge</h3>
                <div className="flex flex-row items-center">
                    <p className="text-2xl mr-2">{infoData.lastChargeAmount}</p>
                    <p className="text-base">{infoData.lastCharge}</p>
                </div>
            </div>
            <div className=" p-8 rounded-2xl h-30 w-full flex flex-col justify-center  bg-sky-100" >

                <h3 className="text-base font-bold">Total Usage Data</h3>
                <p className="text-2xl font-bold">{formatDataUsage(infoData.totalDataUsage)}</p>
            </div>
            <div className=" p-8 rounded-2xl h-30 w-full flex flex-col justify-center  bg-slate-200" >

                <h3 className="text-base font-bold">Daily Usage Data</h3>
                <p className="text-2xl font-bold">{formatDataUsage(infoData.dailyUsageData)}</p>
            </div>
        </div>
    );
};

export default InfoCards;
