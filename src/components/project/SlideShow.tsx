import React, { useState } from 'react';
import LaptopFrame from './LaptopFrame';
import CarouselButton from './SlideShowButton';
import imagePlaceholder from '../../assets/image-placeholder.png';

interface SlideShowProps {
    images: string[];
    phone?: boolean;
    alt: string;
}

const SlideShow: React.FC<SlideShowProps> = ({ images, phone, alt }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isImageLoading, setIsImageLoading] = useState(false); // State for loading indicator
    const mapProject = (image: string) => {
        return image.includes("map");
    };
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
    };

    const handleImageError = () => {
        console.error('Image loading error'); // Log the error or handle it as needed
        setIsImageLoading(false); // Stop showing the loading indicator
    };

    return (
        <div className='flex flex-col'>
            <div id="controls-carousel" className={`flex flex-row h-full w-fit items-center mx-auto justify-center `} data-carousel="static">
                {/* Carousel wrapper */}

                {/* Slider controls */}
                <CarouselButton onClick={prevSlide} direction="prev" label="Previous" />

                {/* Item container */}
                <div className={`relative w-full overflow-hidden after:clear-both after:block after:content-['']`}>
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`relative w-full overflow-hidden after:clear-both after:block after:content-[''] ${index === currentSlide ? 'duration-700 ease-in-out w-full h-full flex *:' : 'hidden w-full h-full'}`}
                            data-carousel-item
                        >
                            <picture className={`-mlw-full object-cover rounded-xs justify-center flex  items-center mx-auto shadow-md ${phone ? 'aspect-[9/19] w-1/2' : 'aspect-video'}  ${(mapProject(image)) ? 'bg-[#F7F7FB]' : 'bg-gray-700'} `}>
                                <img
                                    src={image || imagePlaceholder}
                                    alt={`${alt} Project image`}
                                    className={`h-full w-full  rounded-xs shadow-md ${phone ? 'object-bottom' : ''}${image.includes("map") && !phone ? 'object-contain ' : 'object-cover'}`}
                                    onLoad={() => setIsImageLoading(false)} // Hide loading indicator when loaded
                                    onError={handleImageError} // Handle errors
                                />
                                {isImageLoading && (
                                    <svg className="flex  w-10 h-10 text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                                    </svg>
                                )}
                            </picture>
                        </div>
                    ))}
                </div>

                <CarouselButton onClick={nextSlide} direction="next" label="Next" />
            </div>

            <div className="bottom-10 left-0 right-0 mx-[15%] mb-4 flex list-none justify-center p-0 z-40" data-twe-carousel-indicators>
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        data-twe-target="#carouselExampleIndicators"
                        data-twe-slide-to={index}
                        className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none ${currentSlide === index ? 'bg-blue-500 opacity-100' : '' // Style active indicator
                            }`}
                        aria-label={`Slide ${index + 1}`}
                    />
                ))}
            </div>
        </div >
    );
};

export default SlideShow;
