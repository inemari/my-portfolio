import React from 'react';
import { MdNavigateNext } from "react-icons/md";
interface SlideShowButtonProps {
    onClick: () => void;
    direction: 'prev' | 'next';
    label: string;
}

const SlideShowButton: React.FC<SlideShowButtonProps> = ({ onClick, direction, label }) => (
    <button

        className={`cursor-pointer group focus:outline-none mx-auto`}
        onClick={onClick}
    ><h1>
            {direction === 'prev' && (
                <MdNavigateNext className=" rotate-180 text-gray-400 group-hover:scale-150" />)}
            {direction === 'next' && (
                <MdNavigateNext className=" text-gray-400 group-hover:scale-150" />
            )} <span className="sr-only">{label}</span>
        </h1>
    </button>
);

export default SlideShowButton;
