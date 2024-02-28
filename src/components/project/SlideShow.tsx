import React, { useState } from 'react';
import LaptopFrame from './LaptopFrame';
import CarouselButton from './SlideShowButton';
import PhoneFrame from './PhoneFrame';

interface SlideShowProps {
    images: string[];
    phone?: boolean;
}

const SlideShow: React.FC<SlideShowProps> = ({ images, phone }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
    };

    return (
        <div id="controls-carousel" className="relative w-full flex flex-row h-full justify-center items-center" data-carousel="static">
            {/* Carousel wrapper */}


            {/* Slider controls */}
            <CarouselButton onClick={prevSlide} direction="prev" label="Previous" />

            <div className="overflow-visible rounded-lg l">
                {/* Item 1 */}
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`${index === currentSlide ? 'duration-700 ease-in-out' : 'hidden'
                            }  block w-fit h-full`}
                        data-carousel-item
                    >
                        {!phone ?
                            (<LaptopFrame imageSrc={image} altText={`Slide ${index + 1}`} />
                            )
                            :
                            (<PhoneFrame imageSrc={image} altText={`Slide ${index + 1}`} />)
                        }
                    </div>
                ))}
            </div>
            <CarouselButton onClick={nextSlide} direction="next" label="Next" />
        </div >
    );
};

export default SlideShow;
