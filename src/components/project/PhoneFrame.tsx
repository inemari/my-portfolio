
import React from 'react';
import Phone from '../../assets/images/Phoneframe-nobg.png';

interface PhoneFrameProps {
    imageSrc: string;
    altText: string;
}


const PhoneFrame: React.FC<PhoneFrameProps> = ({ imageSrc, altText }) => {
    return (
        <div className=" md:h-[800px] md:w-[400px] w-full h-fit">
            <div className="h-full flex flex-col">
                <div className="h-0 z-20 w-full">
                    {/* Phone image */}
                    <img src={Phone} alt="" />
                </div>
                {/*Image rendered inside Phone image*/}
                <img src={imageSrc} className=" object-cover min-h-0 m-[30px]  mx-[24px] rounded-tr-[13px] mb-0 rounded-tl-[14px] overflow-clip" alt={altText} />
            </div>
        </div>
    )
}
export default PhoneFrame;