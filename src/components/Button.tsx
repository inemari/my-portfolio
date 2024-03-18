import React from 'react'

type Props = {
    buttonText: string;
    children?: React.ReactNode;
}

export const Button = (props: Props) => {
    return (
        <button className="bg-indigo text-white hover:bg-white hover:bg-gradient-to-b from-indigo to-indigo-dark  font-bold py-2 px-4 rounded flex flex-row items-center">
            {props.buttonText}
            {props.children}
        </button>
    )
}