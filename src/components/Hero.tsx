import { m } from "framer-motion"
import illustration from '../assets/images/mv-campaign.jpg';
import AnimatedText from "./textanimations/TypeWriter";
// import waves from '../assets/images/abstractelement1.png';

// import AnimatedText from "./textanimations/TypeWriter";



function Hero() {

    return (
        <m.div className="w-full  md:h-[90vh] h-[80vh] justify-center flex flex-col-reverse md:flex-row  items-center md:snap-center" initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}>


            <div className="flex flex-col h-full  justify-center w-4/6  md:pr-20">
                <AnimatedText className="text-4xl md:text-5xl" text="Hey there! 👋" />
                <p
                    className="text-md md:text-2xl  w-full pt-5 text-justify">
                    I'm Ine, a full-stack developer, but where I truly shine is in the {" "}
                    <span
                        className=" text-white rounded-xl px-2 font-semibold">front-end of things</span>. Unlike your typical code wizard, I come with a
                    <span className=" text-white rounded-xl px-2 bg-opacity-50 font-semibold">built-in design compass</span>, that's always pointing towards user-friendliness, fueled by my passion and experience in UX-design.
                </p>
            </div>
            <m.div className="items-center flex md:justify-end rounded-full aspect-square md:w-2/6 w-3/6 h-full"  >

                <img src={illustration} alt="" className=' aspect-square object-cover rounded-full grayscale' />

            </m.div>

        </m.div>
    )
}

export default Hero

