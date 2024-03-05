
import React from 'react';
import laptop from '../../assets/images/laptopframe-nobg.png';

interface LaptopFrameProps {
    imageSrc: string;
    altText: string;
}


const LaptopFrame: React.FC<LaptopFrameProps> = ({ imageSrc, altText }) => {
    return (
        <div className=" md:h-[427px] md:w-[700px] h-[217px] w-[350px] sm:h-[300px] sm:w-[500px] my-auto rounded-t-lg overflow-hidden">
            <div className="h-full flex flex-col overflow-clip rounded-t-xl">
                <div className="h-0 z-20 w-full">
                    {/* Laptop image */}
                    <img src={laptop} alt="" />
                </div>
                {/*Image rendered inside laptop image*/}
                <img src={imageSrc} className=" object-cover min-h-0 m-[2px] md:mx-[57px] sm:mx-[42px] mx-[28px] rounded-t-xl overflow-clip pb-4" alt={altText} />
            </div>
        </div>
    )
}
export default LaptopFrame;