
import React, { useState } from 'react';
import { motion } from "framer-motion"
interface CardProps {
    imageSrc: string;
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (

        <motion.div
            className=" flex  flex-col w-full rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-neutral-700 "
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}>
            <a href="#!">
                <img
                    className="w-full rounded-t-lg   aspect-video"
                    src={imageSrc} alt={title} />
            </a>
            <div className="p-6 text-wrap">
                <h5
                    className="mb-2 text-xl font-medium leading-tight text-neutral-50">
                    {title}
                </h5>
                <p className="mb-4 text-neutral-200">
                    {description}
                </p>

            </div>
        </motion.div>

    );
};

export default Card;
