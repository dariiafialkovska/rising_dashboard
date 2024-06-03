import React from 'react';
import Link from 'next/link';
// Define the SidebarProps interface
interface SidebarProps {
    activePage: string;  // Define the type of the 'activePage' prop
}
// Define the Sidebar component
const Sidebar: React.FC<SidebarProps> = ({ activePage }) => {
    return (
        <div className="sidebar h-full w-90 ">
            <div className="mt-6 mb-6">                        
            <img src="/images/Rising Logo.svg" alt="Dashboard" className="w-15 inline-block" />
            </div>
            <ul>

                <li className={`sidebar-list p-6 ${activePage === 'dashboard' ? 'active' : ''}`}>
                    <Link href="/dashboard">
                        <img src="/images/homepage.svg" alt="Dashboard" className="w-6 h-6 inline-block" />
                    </Link>
                </li>
                <li className="p-6">
                    <Link href="/settings">
                        <img src="/images/card.svg" alt="Dashboard" className="w-6 h-6 inline-block" />

                    </Link>
                </li>
                <li className="p-6">
                    <Link href="/profile">
                        <img src="/images/person.svg" alt="Dashboard" className="w-6 h-6 inline-block" />

                    </Link>
                </li>
                <li className="p-6">
                    <Link href="/logout">
                        <img src="/images/logout.svg" alt="Dashboard" className="w-6 h-6 inline-block" />

                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
