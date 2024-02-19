import { motion } from "framer-motion"
import illustration from '../assets/womanwithpoodle.jpg';
function Hero() {

    return (
        <motion.div className="w-full grid-cols-1 justify-center md:flex md:gap-5 lg:grid lg:grid-cols-2 mx-auto " >
            <div className=" col-span-1 flex flex-col  text-center md:w-3/5 lg:w-full lg:justify-center lg:text-left">
                <h1 className='text-justify' >Hi !</h1>
                <h1 className='font-semibold pb-5 pt-3 text-justify'>
                    I'm Ine Bredesen. a Fullstack Developer</h1>
                <p className='text-2xl text-justify '>Fullstack developer based in Kristiansand, Norway. I am coding with a clean and beautiful problem
                    solving in mind.</p>
            </div>
            <div className="col-span-1  items-center flex justify-end bg-opacity-80 rounded-full aspect-square ">
                <img src={illustration} alt="" className='max-w-lg rounded-full ' />
            </div></motion.div>
    )
}

export default Hero