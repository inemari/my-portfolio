// import { useRef } from 'react';
// import abstractElement from '../assets/lottieFiles/AbstractElement.json';         //Logo animation

// import Lottie, { LottieRefCurrentProps } from "lottie-react";


const Logo = () => {

    // const abstractRef = useRef<LottieRefCurrentProps>(null);
    return (
        <div className="flex items-center justify-start pl-2 h-full">
            {/* <div className="absolute z-10">
                <Lottie
                    lottieRef={abstractRef}
                    animationData={abstractElement}                 //Logo animation
                    className="w-fit h-16 opacity-50 p-1"
                    loop
                />
            </div> */}

            {/* Content */}
            <div className="relative z-11 text-center">
                <h1>IB</h1>
            </div></div>
    )
}

export default Logo