import React from 'react';
import { IoArrowForwardOutline } from "react-icons/io5";

type Props = {
    buttonText: string;
    children?: React.ReactNode;
    link?: string;
    onClick?: () => void;
    className?: string;
}

export const Button = ({ buttonText, children, link, onClick, className }: Props) => {
    const buttonContent = (
        <>
            <p className='font-bold text-lg'>{buttonText}</p>
            <div className='pl-2 group-hover:hidden'>{children}</div>
            <div className='pl-2 hidden group-hover:flex group-hover:scale-150'><IoArrowForwardOutline /></div>
        </>
    );

    const buttonStyle = `z-50 w-full justify-center py-2 px-6 flex flex-row items-center ${className}`;

    const renderButton = () => (
        <button className={buttonStyle} onClick={onClick && onClick}>
            {buttonContent}
        </button>
    );

    return (
        <>
            {link ? (
                <a href={link} className='w-full group hover:text-white rounded-lg hover:shadow-xs bg-indigo hover:shadow-gray-400 max-w-[50%]'>
                    {renderButton()}
                </a>
            ) : (
                renderButton()
            )}
        </>
    );
}
