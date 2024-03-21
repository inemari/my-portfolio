// CardGroup.tsx
import React from 'react';
import Card from './Card';
import { Passion } from '../../data/passionsData';



interface CardGroupProps {
    items: Passion[];
    header: string;
}

const CardGroup: React.FC<CardGroupProps> = ({ items, header }) => {
    return (
        <div className='justify-center items-center flex-col flex space-y-5 md:snap-center md:h-[90vh]'>
            <h2 className="text-4xl font-bold mb-5 border-b-[5px] border-collapse border-indigo-600 pb-2">
                {header}
            </h2>
            <div className='grid grid-cols-2 lg:flex lg:flex-row justify-between gap-3 md:gap-x-6 2xl:gap-14'>
                {items.map((item) => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default CardGroup;
