import React, { useState } from 'react';
import SlideShowButton from './SlideShowButton';

import imagePlaceholder from '../../assets/image-placeholder.png';
import Slide from './SlideImage';

interface SlideShowProps {
    images: string[];
    phone?: boolean;
    alt: string;
}

const SlideShow: React.FC<SlideShowProps> = ({ images, phone, alt }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isImageLoading, setIsImageLoading] = useState(false);

    const nextSlide = () => updateSlide(currentSlide + 1);
    const prevSlide = () => updateSlide(currentSlide - 1);

    const updateSlide = (slide: number) => {
        setCurrentSlide(() => (slide + images.length) % images.length);
    };

    const handleImageError = () => {
        console.error('Image loading error');
        setIsImageLoading(false);
    };

    const mapProject = (image: string) => image.includes("map");

    return (
        <div className="flex flex-col">
            <div id="controls-carousel" className="flex flex-row h-full items-center mx-auto justify-center " data-carousel="static">
                <SlideShowButton onClick={prevSlide} direction="prev" />
                <div className="overflow-hidden after:clear-both after:block after:content-['']">
                    {images.map((image, index) => (
                        <Slide
                            key={index}
                            image={image || imagePlaceholder}
                            alt={`${alt} Project image`}
                            phone={phone}
                            mapProject={mapProject(image)}
                            isCurrent={index === currentSlide}
                            isImageLoading={isImageLoading}
                            handleImageError={handleImageError}
                        />
                    ))}
                </div>
                <SlideShowButton onClick={nextSlide} direction="next" />
            </div>

            <div className="right-0 mx-[15%] mb-1 flex list-none justify-center p-0 z-40" data-twe-carousel-indicators>
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        data-twe-target="#carouselExampleIndicators"
                        data-twe-slide-to={index}
                        className={`mx-[3px] box-content h-2 w-8 flex-initial cursor-pointer  mt-3 border-solid rounded-full border-transparent  bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none ${currentSlide === index ? 'bg-white ' : 'bg-gray-400'}`}
                        aria-label={`Slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default SlideShow;
