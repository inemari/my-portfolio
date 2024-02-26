// CardGroup.tsx
import React from 'react';
import Card from './Card';
import { CardItem } from './CardItem'; // Import the CardItem interface

interface CardGroupProps {
    items: CardItem[];
    header: string;
}

const CardGroup: React.FC<CardGroupProps> = ({ items, header }) => {
    return (
        <div className='justify-center items-center flex-col flex space-y-5'>
            <h2 className="text-4xl font-bold mb-5 border-b-[5px] border-collapse border-indigo-600 pb-2">
                {header}
            </h2>
            <div className='flex flex-col lg:flex-row justify-center gap-20'>
                {items.map((item) => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default CardGroup;
