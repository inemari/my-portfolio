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
        <div id="controls-carousel" className={`flex flex-row items-center w-full h-fit `} data-carousel="static">
            {/* Carousel wrapper */}


            {/* Slider controls */}
            <CarouselButton onClick={prevSlide} direction="prev" label="Previous" />

            {/* <div className="overflow-visible rounded-lg  w-full h-full bg-amber-400 bg-opacity-15">3 */}
            {/* Item 1 */}
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`${index === currentSlide ? 'duration-700 ease-in-out' : 'hidden'
                        } `}
                    data-carousel-item
                >
                    {/* {!phone ?
                        (<LaptopFrame imageSrc={image} altText={`Slide ${index + 1}`} />
                        )
                        :
                        (<PhoneFrame imageSrc={image} altText={`Slide ${index + 1}`} />)
                    } */}
                    <img src={image} alt="" className='h-full w-full object-cover rounded-md aspect-video ' />
                </div>
            ))}
            {/* </div> */}
            <CarouselButton onClick={nextSlide} direction="next" label="Next" />
        </div >
    );
};

export default SlideShow;
