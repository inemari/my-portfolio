import { m } from "framer-motion"
import illustration from '../assets/images/mv-campaign.jpg';
import AnimatedText from "./textanimations/TypeWriter";
// import waves from '../assets/images/abstractelement1.png';

// import AnimatedText from "./textanimations/TypeWriter";



function Hero() {

    return (
        <m.div className="w-full  md:h-[calc((100vh-90px)-80px)] h-[calc((100vh-90px)-40px)] justify-center flex flex-row  items-center snap-center" initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}>
            {/* 
            <m.img src={waves} alt="" className='absolute top-0 bottom-0 left-0 right-0 w-full h-full -z-10 ' animate={{ rotateX: [0, 360] }}
                transition={{ loop: Infinity }} />                      //Waves image animated*/}

            <div className="flex flex-col h-full text-center  lg:justify-center lg:text-left w-4/6  pr-20">
                <AnimatedText className="text-5xl" text="Hey there! 👋" />
                {/* <AnimatedText className="font-semibold pb-5 pt-3 text-2xl" text=" I'm Ine;" /> */}

                <p
                    className="text-lg lg:text-2xl  w-full pt-5 text-justify">
                    I'm Ine, a full-stack developer, but where I truly shine is in the {" "}
                    <span
                        className=" text-white rounded-xl px-2 font-semibold">front-end of things</span>. Unlike your typical code wizard, I come with a
                    <span className=" text-white rounded-xl px-2 bg-opacity-50 font-semibold">built-in design compass</span>, that's always pointing towards user-friendliness, fueled by my passion and experience in UX-design.
                </p>
            </div>
            <m.div className="items-center flex justify-end rounded-full aspect-square w-2/6 "  >

                <img src={illustration} alt="" className=' aspect-square object-cover rounded-full grayscale' />

            </m.div>

        </m.div>
    )
}

export default Hero

