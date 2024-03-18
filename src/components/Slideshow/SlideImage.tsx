import React from 'react';

interface SlideProps {
    image: string;
    alt: string;
    phone?: boolean;
    mapProject: boolean;
    isCurrent: boolean;
    isImageLoading: boolean;
    handleImageError: () => void;
}

const Slide: React.FC<SlideProps> = ({ image, alt, phone, mapProject, isCurrent, isImageLoading, handleImageError }) => {
    return (
        <div
            className={`relative w-full overflow-hidden after:clear-both after:block after:content-[''] ${isCurrent ? 'duration-700 ease-in-out w-full h-full flex *:' : 'hidden w-full h-full'}`}
            data-carousel-item
        >
            <picture className={`-mlw-full justify-center flex items-center mx-auto ${phone && 'w-[300px]'} ${mapProject ? 'bg-[#F7F7FB] aspect-video' : 'bg-transparent'}`}>
                <img
                    src={image}
                    alt={alt}
                    className={`rounded-xs ${phone ? 'object-contain h-full rounded-2xl overflow-clip' : 'h-full w-full'} ${mapProject && !phone ? 'object-contain' : 'object-contain h-[500px] '}`}
                    onLoad={() => handleImageError()}
                    onError={() => handleImageError()}
                />
                {isImageLoading && (
                    <svg className="flex w-10 h-10 text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                )}
            </picture>
        </div>
    );
};

export default Slide;
