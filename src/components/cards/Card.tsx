// Card.tsx
import React, { FC, useState } from 'react';
import { m } from 'framer-motion';

import CardMedia from './CardMedia';
import { Passion } from '../../data/passionsData';
import UxUiAnimation from '../textanimations/UxUiAnimation';


interface CardProps {
    item: Passion;
}

const Card: FC<CardProps> = ({ item }) => {
    const [isClicked, setIsClicked] = useState(false);
    const [isHovered, setIsHovered] = React.useState(false);

    console.log('Item:', item);
    return (
        <m.div
            className="flex flex-col w-full rounded-lg p-2 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] "
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsClicked(isClicked === true ? false : true)}
            onHoverStart={() => setIsHovered(!isHovered)}
        >
            <>
                <div className='flex justify-center items-center'>
                    <CardMedia cover={item.cover} altText={item.coverAltText ? item.coverAltText : undefined} />
                </div>
                <div className="p-2 md:p-6 text-wrap">
                    {item.title.includes('UX') ? (
                        <UxUiAnimation />
                    ) :
                        (<h3 className='font-thin mb-2'>{item.title}</h3>)}
                    <p className="mb-4 text-neutral-200">{item.shortDescription}</p>
                </div></>

        </m.div>
    );
};

export default Card;
