import Link from 'next/link';

const Sidebar = () => {
    return (
        <div className="sidebar h-full w-90 ">
            <div className="p-5">                        <img src="/images/Rising Logo.svg" alt="Dashboard" className="w-6 h-6 inline-block" />
</div>
            <ul>
                
                <li className="sidebar-list p-4">
                    <Link href="/dashboard">
                        <img src="/images/homepage.svg" alt="Dashboard" className="w-6 h-6 inline-block" />
                    </Link>
                </li>
                <li className="p-4">
                    <Link href="/settings">
                    <img src="/images/card.svg" alt="Dashboard" className="w-6 h-6 inline-block" />

                    </Link>
                </li>
                <li className="p-4">
                    <Link href="/profile">
                    <img src="/images/person.svg" alt="Dashboard" className="w-6 h-6 inline-block" />

                    </Link>
                </li>
                <li className="p-4">
                    <Link href="/logout">
                    <img src="/images/logout.svg" alt="Dashboard" className="w-6 h-6 inline-block" />

                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
