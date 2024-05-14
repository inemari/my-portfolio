import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
interface SlideShowButtonProps {
    onClick: () => void;
    direction: 'prev' | 'next';
}

const SlideShowButton: React.FC<SlideShowButtonProps> = ({ onClick, direction }) => (

    <h1 onClick={onClick} className={`cursor-pointer group focus:outline-none  w-fit text-gray-400 group-hover:scale-125`}>
        <IoIosArrowForward className={`${direction === 'prev' ? 'rotate-180' : ''}`} />
    </h1>

);

export default SlideShowButton;
