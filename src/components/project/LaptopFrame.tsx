
import React from 'react';
import laptop from '../../assets/images/laptopframe-nobg.png';

interface LaptopFrameProps {
    imageSrc: string;
    altText: string;
}


const LaptopFrame: React.FC<LaptopFrameProps> = ({ imageSrc, altText }) => {
    return (
        <div className=" md:h-[346px] md:w-[700px] h-[217px] w-[350px] sm:h-[200px] sm:w-[500px] my-auto rounded-t-3xl mt-0 overflow-hidden " >
            <div className="h-full flex flex-col rounded-t-3xl bg-transparent">
                <div className="h-0 z-20 w-full ">
                    {/* Laptop image */}
                    <img src={laptop} alt="" className=' rounded-t-3xl h-[350px] mb-[0px] w-full ' />
                </div>
                {/*Image rendered inside laptop image*/}
                <img src={imageSrc} className=" object-cover  min-h-0 m-[2px] md:mx-[57px] sm:mx-[42px] mx-[28px] rounded-t-xl overflow-y-clip p pb-4" alt={altText} />
            </div>
        </div>
    )
}
export default LaptopFrame;