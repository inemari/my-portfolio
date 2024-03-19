import React, { ReactNode } from 'react';
import { Button } from './Button';

interface ButtonGroupProps {
    text: string[];
    links: string[];
    children: ReactNode;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ text, links, children }) => {
    const renderButtons = () => {
        const buttons = [];
        for (let i = 0; i < text.length; i++) {
            if (links && links[i]) {
                buttons.push(
                    <a key={i} href={links[i]}>
                        <Button buttonText={text[i]}>
                            {children}
                        </Button>
                    </a>
                );
            }
        }
        return buttons;
    };

    return (
        <div className='flex flex-row gap-6'>
            {renderButtons()}
        </div>
    );
};

export default ButtonGroup;
