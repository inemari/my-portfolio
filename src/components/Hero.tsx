import { motion } from "framer-motion"
import illustration from '../assets/images/mv-campaign.jpg';
import AnimatedText from "./textanimations/TypeWriter";
function Hero() {

    return (
        <motion.div className="w-full grid-cols-1 justify-center md:flex md:gap-5 lg:grid lg:grid-cols-2 mx-auto " >
            <div className=" col-span-1 flex flex-col  text-center md:w-3/5 lg:w-full lg:justify-center lg:text-left">
                <AnimatedText className="text-5xl" text="Hi!" />
                <AnimatedText className="font-semibold pb-5 pt-3 text-5xl" text="I'm Ine Bredesen, a Fullstack Developer." />

                <p className="text-lg lg:text-2xl text-justify">
                    I'm passionate about{" "}
                    <span className="bg-indigo-500 text-white rounded-xl px-2">frontend development</span> and{" "}
                    <span className="bg-indigo-500 text-white rounded-xl px-2 bg-opacity-50">UI/UX Design</span>.
                    I'm ready to bring creativity and dedication to our next project. Let's team up and build something awesome!
                </p>
                {/* <h1 className='font-semibold pb-5 pt-3 text-justify'>  I'm Ine Bredesen. a Fullstack Developer</h1> */}
                {/* <AnimatedText text="Fullstack developer based in Kristiansand, Norway, with a genuine passion for frontend development and UI/UX Design. Ready to bring creativity and dedication to our next project. Let's team up and build something awesome!" /> */}
            </div>
            <div className="col-span-1  items-center flex justify-end bg-opacity-80 rounded-full aspect-square p-32">
                <img src={illustration} alt="" className='rounded-full aspect-square object-cover' />
            </div>

        </motion.div>
    )
}

export default Hero