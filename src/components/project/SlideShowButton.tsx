import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
interface SlideShowButtonProps {
    onClick: () => void;
    direction: 'prev' | 'next';
    label: string;
}

const SlideShowButton: React.FC<SlideShowButtonProps> = ({ onClick, direction, label }) => (


    <h1 onClick={onClick} className={`cursor-pointer group focus:outline-none  `}>
        {direction === 'prev' && (
            <IoIosArrowForward className=" rotate-180 text-gray-400    group-hover:scale-125   " />)}
        {direction === 'next' && (
            <IoIosArrowForward className=" text-gray-400 group-hover:scale-125" />
        )} <span className="sr-only">{label}</span>
    </h1>

);

export default SlideShowButton;
