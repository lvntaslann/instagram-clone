import React from 'react';

const Tab = ({ label, icon, isActive, onClick }) => {
    return (
        <button
            className={`${isActive ? "text-white border-t-2 border-white" : "text-gray-600"
                } flex items-center gap-x-1.5 -mt-[1.5px] px-4 py-2 focus:outline-none transition-opacity duration-300 ease-out ${isActive ? "opacity-100" : "opacity-75"
                }`}
            onClick={onClick}
        >
            {icon && (
                <img
                    src={icon}
                    alt={`${label} icon`}
                    className={`w-[11px] h-[11px] ${isActive ? "brightness-150" : "brightness-50"
                        }`}
                />
            )}
            {label}
        </button>
    );
};

export default Tab;
