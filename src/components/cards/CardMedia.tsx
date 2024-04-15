import React, { useEffect, useRef } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { AnimationConfigWithData } from 'lottie-web';

interface CardMediaProps {
    cover: string | AnimationConfigWithData | React.ReactNode;
    altText?: string;
    coverAltText?: string;
}

const CardMedia: React.FC<CardMediaProps> = ({ cover, coverAltText }) => {
    const lottieRef = useRef<LottieRefCurrentProps>(null);

    useEffect(() => {
        // When the ref has been set, call interaction methods...
        if (lottieRef.current) {
            lottieRef.current.setSpeed(2)
            lottieRef.current?.play();
        }
    }, [lottieRef]);

    if (typeof cover === 'string') {
        return (
            <img className="w-full rounded-t-lg aspect-video object-cover " src={cover} alt={coverAltText || ''} />
        );
    }

    if (React.isValidElement(cover)) {
        return cover;
    }

    if (typeof cover === 'object') {
        return (
            <a href="#!">
                <Lottie
                    id="card-animation"
                    lottieRef={lottieRef}
                    // onPointerEnter={() => lottieRef.current?.play()} // Play the animation on pointer enter
                    // onPointerLeave={() => lottieRef.current?.pause()} // Pause the animation on pointer leave
                    animationData={cover}
                    autoPlay={false}
                    loop={false}
                    className="w-full max-w-80 aspect-square p-5 cursor-default"
                />
            </a>
        );
    }

    return null;
};

export default CardMedia;
