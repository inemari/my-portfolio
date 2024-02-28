
import React from 'react';
import laptop from '../../assets/images/laptopframe-nobg.png';

interface LaptopFrameProps {
    imageSrc: string;
    altText: string;
}


const LaptopFrame: React.FC<LaptopFrameProps> = ({ imageSrc, altText }) => {
    return (
        <div className=" md:h-[400px] md:w-[700px] w-full">
            <div className="h-full flex flex-col">
                <div className="h-0 z-20 w-full">
                    {/* Laptop image */}
                    <img src={laptop} alt="" />
                </div>
                {/*Image rendered inside laptop image*/}
                <img src={imageSrc} className=" object-cover min-h-0 m-[2px] mx-[57px] rounded-tr-[13px] mb-0 rounded-tl-[14px] overflow-clip" alt={altText} />
            </div>
        </div>
    )
}
export default LaptopFrame;