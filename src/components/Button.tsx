import React from 'react'
import { IoArrowForwardOutline } from "react-icons/io5";
type Props = {
    buttonText: string;
    children?: React.ReactNode;
    link: string;
}

export const Button = (props: Props) => {
    return (
        <a href={props.link} className='w-full group hover:text-white rounded-lg hover:shadow-xs bg-indigo  hover:shadow-gray-400 max-w-[50%] '>
            <button className="w-full justify-center py-2 px-6 flex flex-row items-center ">
                <p className='font-bold text-lg'>{props.buttonText}</p>
                <div className='pl-2 group-hover:hidden'>{props.children}</div>
                <div className='pl-2 hidden group-hover:flex group-hover:scale-150 ' ><IoArrowForwardOutline /></div>
            </button>
        </a>
    )
}