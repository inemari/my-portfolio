import React from 'react';
import Lottie from 'lottie-react';
import uxAnimation from '../../assets/lottieFiles/fPN697U7p5.json';


const UxUiAnimation: React.FC = () => {

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Lottie animationData={uxAnimation} height={30} width={30} />
            <span style={{ marginLeft: 8 }}>Design</span>
        </div>
    );
};

export default UxUiAnimation;


