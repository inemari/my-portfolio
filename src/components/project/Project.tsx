
import { FC, useEffect } from 'react';
import { ProjectItem } from '../../data/projectsData';
import Slideshow from '../Slideshow/SlideShow';
import { m, useAnimation } from 'framer-motion'
import ProjectInfoSection from './ProjectInfoSection';
import { useInView } from "react-intersection-observer";

// import laptop from '../assets/images/laptopframe-nobg.png';
interface ProjectProps {
    project: ProjectItem;
    index: number;
}


const squareVariants = {
    visible: {
        opacity: 100,
        transition: {
            type: "easeInOut",
            bounce: 0.8,
            duration: 0.8
        }
    },
    hidden: {
        opacity: 0
    },

};

const Project: FC<ProjectProps> = ({ project, index }) => {
    const isEven = index % 2 === 0;


    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    return (
        <div className={`h-[90vh] flex flex-col justify-center  items-center ${index === 0 ? 'pb-24 md:snap-end ' : '  md:snap-center my-auto'}`}>
            <m.div key={index} className={`  flex md:flex-row flex-col h-full z-10 w-full items-center justify-between ${isEven ? ' md:flex-row-reverse  ' : '  '}`} ref={ref}
                // animate={controls}
                initial='hidden'
                variants={squareVariants}
                whileInView='visible'
            >


                <div className={` h-full  flex flex-col items-center justify-center ${project.phone ? 'md:w-2/6' : 'md:min-w-[0%] md:w-full'}${project.title.includes("Speed") ? 'md:w-full' : ''}`}>
                    <Slideshow images={project.images} phone={project.phone} alt={project.title}></Slideshow>

                </div>
                <div className={`flex flex-col h-full justify-center items-center ${project.phone ? 'md:w-4/6 ' : 'md:min-w-2/6 md:w-full '} ${!isEven && 'md:text-end'} `}>
                    <ProjectInfoSection project={project} isEven={isEven} />

                </div >

            </m.div >          </div>
    );
};

export default Project;
