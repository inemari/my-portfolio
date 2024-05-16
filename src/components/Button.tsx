import React from 'react'
import { IoArrowForwardOutline } from "react-icons/io5";
type buttonProps = {
    buttonText: string;
    children?: React.ReactNode;
    link?: string;
    onClick?: () => void;
    arrow: boolean;
}

export const Button = (props: buttonProps) => {
    return (
        <a href={props.link} className='w-full group hover:text-white rounded-lg hover:shadow-xs bg-indigo  hover:shadow-gray-400 max-w-[50%] '>
            <button className="w-full justify-center py-2 px-6 flex flex-row items-center " onClick={props.onClick}>
                <p className='font-bold lg:text-lg text-md'>{props.buttonText}</p>
                <div className='pl-2 group-hover:hidden'>{props.children}</div>
                <div className='pl-2 hidden group-hover:flex group-hover:scale-150 ' >{props.arrow && <IoArrowForwardOutline />}</div>
            </button>
        </a>
    )
}