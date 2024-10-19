import React from 'react';

const TopModel = ({ title, description }) => {
    return (
        <div className="absolute top-0 left-0 w-full bg-black bg-opacity-80 text-white p-4 rounded-t-lg">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-sm">{description}</p>
        </div>
    );
};

export default TopModel;
