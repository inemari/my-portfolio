import React from 'react';
import Lottie from 'lottie-react';
import uxAnimation from '../../assets/lottieFiles/fPN697U7p5.json';


const UxUiAnimation: React.FC = () => {

    return (
        <div className='flex flex-row items-end justify-start '>
            <div className='w-9 h-10 overflow-hidden '>
                <Lottie className='left-0 h-28 w-24 relative flex flex-col -mt-[28px] -ml-7' animationData={uxAnimation} > </Lottie>
            </div>
            <span ><h3 className='font-thin'>Design</h3></span>
        </div>
    );
};

export default UxUiAnimation;


