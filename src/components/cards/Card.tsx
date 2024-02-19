import React from 'react';

interface CardProps {
    imageSrc: string;
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => {
    return (
        <div className="max-w-lg border  rounded-lg shadow bg-gray-800 border-gray-700">

            <img src={imageSrc} alt={title} />

            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{title}</h5>
                <p className="mb-3 font-normal text-gray-400">{description}</p>
            </div>
        </div>
    );
};

export default Card;
