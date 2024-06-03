import React from 'react';

interface ToastNotificationProps {
    message: string;
    onClose: () => void;
}
// Define the ToastNotification component
const ToastNotification = ({ message, onClose }: ToastNotificationProps) => {
    return (
        <div className="toast-notification">
            <p>{message}</p>
            <button onClick={onClose}>X</button>
        </div>
    );
};

export default ToastNotification;