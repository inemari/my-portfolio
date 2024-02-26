// Card.tsx
import React, { FC, useState } from 'react';
import { m } from 'framer-motion';
import { CardItem } from './CardItem'; // Import the CardItem interface
import CardMedia from './CardMedia';

interface CardProps {
    item: CardItem;
}

const Card: FC<CardProps> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = React.useState(false);
    console.log('Item:', item);
    return (
        <m.div
            className="flex flex-col w-full rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-700"
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            onHoverStart={() => setIsHovered(!isHovered)}
        >
            <div className='flex justify-center items-center'>
                <CardMedia cover={item.cover} altText={item.coverAltText ? item.coverAltText : undefined} />
            </div>
            <div className="p-6 text-wrap">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-50">{item.title}</h5>
                <p className="mb-4 text-neutral-200">{item.shortDescription}</p>
            </div>
        </m.div>
    );
};

export default Card;
