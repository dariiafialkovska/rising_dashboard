import React from 'react';
import Dropdown from './Dropdown';

// Define the Transaction interface
interface Transaction {
    type: string;
    location: string;
    rental: string;
    ipcount: number; 
    purpose: string;
    date: string;
}
// Define the TransactionsProps interface
interface TransactionsProps {
    data: Transaction[];
}

// Define the Transactions component
const Transactions = ({ data }: TransactionsProps) => {
    const handleActionSelect = (action: string, ipcount: number) => {
        console.log(`Action "${action}" selected with Number of IP: ${ipcount}`);
    };
    return (
        <div className="bg-white p-8 rounded-lg shadow">
            <h3 className="text-xl mb-4">Transactions History</h3>
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
                    {data.length === 0 ? (
                        <tr>
                            <td colSpan={7} className="border-b p-4 text-center">
                                No data available.
                            </td>
                        </tr>
                    ) : (
                        data.map((row: Transaction, index: number) => (
                            <tr key={index}>
                                <td className="border-b p-4">{row.type}</td>
                                <td className="border-b p-4">{row.location}</td>
                                <td className="border-b p-4">{row.rental}</td>
                                <td className="border-b p-4">{row.ipcount}</td>
                                <td className="border-b p-4">{row.purpose}</td>
                                <td className="border-b p-4">{new Date(row.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</td>
                                <td className="border-b p-4">
                                <Dropdown onActionSelect={(action) => handleActionSelect(action, row.ipcount)} ipcount={row.ipcount}/>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Transactions;
