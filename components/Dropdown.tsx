import React, { useState } from 'react';

interface DropdownProps {
    onActionSelect: (action: string) => void; 
}

// Define the Dropdown component

const Dropdown: React.FC<DropdownProps> = ({ onActionSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedAction, setSelectedAction] = useState('Actions');

    const handleActionClick = (action: string) => {
        onActionSelect(action);
        setSelectedAction(action); 
        setIsOpen(false); 
    };

    return (
        <div className="relative">
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="bg-white  rounded-md p-2 shadow-md text-blue-600 w-full text-left">
                {selectedAction} <span className="float-right">▼</span>
            </button>
            {isOpen && (
                <ul className="origin-top-right absolute left-0 mt-1 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => onActionSelect('In Progress')}>
                        In Progress
                    </li>
                    <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => onActionSelect('Processing')}>
                        Processing
                    </li>
                    <li className="p-2 hover:bg-gray-100 cursor-pointer" onClick={() => onActionSelect('Completed')}>
                        Completed
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
