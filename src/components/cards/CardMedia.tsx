import React, { useRef } from 'react';
import Lottie, { LottieRefCurrentProps, AnimationConfigWithData } from 'lottie-react';

interface CardMediaProps {
    mediaSrc: string | AnimationConfigWithData | React.ReactNode | null;
    altText?: string;
}

const CardMedia: React.FC<CardMediaProps> = ({ mediaSrc, altText }) => {
    const hoverRef = useRef<LottieRefCurrentProps>(null);

    const renderMedia = () => {
        if (typeof mediaSrc === 'string') {
            return <img className="w-full rounded-t-lg aspect-video" src={mediaSrc} alt={altText} />;
        } else if (React.isValidElement(mediaSrc)) {
            return mediaSrc;
        } else if (typeof mediaSrc === 'object') {
            return (
                <Lottie
                    lottieRef={hoverRef}
                    autoPlay={false}
                    onPointerEnter={() => hoverRef.current?.play()} // Play the animation on pointer enter
                    onPointerLeave={() => hoverRef.current?.pause()} // Pause the animation on pointer leave
                    animationData={mediaSrc as AnimationConfigWithData}
                    className='w-full max-w-80 aspect-square p-5'
                />
            );
        } else {
            return null;
        }
    };

    return <a href="#!">{renderMedia()}</a>;
};

export default CardMedia;
