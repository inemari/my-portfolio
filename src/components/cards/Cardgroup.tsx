import React from 'react';
import Card from './Card';

interface CardItem {
    id: number;
    imageSrc: string;
    title: string;
    description: string;
}

interface CardGroupProps<T extends CardItem> {
    items: T[];
    header: string;
}

const CardGroup: React.FC<CardGroupProps<CardItem>> = ({ items, header }) => {
    return (
        <div className='justify-center items-center flex-col flex space-y-5'>
            <h1 className='text-center'>{header}</h1>
            <div className='flex flex-col lg:flex-row justify-center gap-20'>
                {items.map((item) => (
                    <Card
                        key={item.id}
                        imageSrc={item.imageSrc}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default CardGroup;
