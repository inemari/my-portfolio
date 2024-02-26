import { m } from "framer-motion"
import illustration from '../assets/images/mv-campaign.jpg';
// import waves from '../assets/images/abstractelement1.png';

import AnimatedText from "./textanimations/TypeWriter";



function Hero() {

    return (
        <m.div className="w-full  justify-center flex flex-row mx-auto" >
            {/* 
            <m.img src={waves} alt="" className='absolute top-0 bottom-0 left-0 right-0 w-full h-full -z-10 ' animate={{ rotateX: [0, 360] }}
                transition={{ loop: Infinity }} />                      //Waves image animated*/}

            <div className="flex flex-col  text-center  lg:justify-center lg:text-left w-4/6  pr-20">
                <AnimatedText className="text-5xl" text="Hi!" />
                <AnimatedText className="font-semibold pb-5 pt-3 text-5xl" text="I'm Ine Bredesen, a Fullstack Developer." />

                <p className="text-lg lg:text-2xl text-justify w-full ">
                    I'm passionate about{" "}
                    <span className="bg-indigo-500 text-white rounded-xl px-2">frontend development</span> and{" "}
                    <span className="bg-indigo-500 text-white rounded-xl px-2 bg-opacity-50">UI/UX Design</span>.
                    I'm ready to bring creativity and dedication to our next project. Let's team up and build something awesome!
                </p>

            </div>
            <div className="items-center flex justify-end bg-opacity-80 rounded-full aspect-square w-2/6 ">

                <img src={illustration} alt="" className=' aspect-square object-cover  rounded-full grayscale' />
               
            </div>

        </m.div>
    )
}

export default Hero

