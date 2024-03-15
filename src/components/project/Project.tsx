
import { FC, useEffect } from 'react';
import { ProjectItem } from '../../data/projectsData';
import Slideshow from './SlideShow';
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
        y: 50,

        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    },
    hidden: {
        y: 300
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
        <m.div key={index} className={` snap-center h-[full] flex lg:flex-row flex-col z-10 w-full items-center rounded-2xl  ease-in-out justify-between ${isEven ? 'lg:flex-row-reverse  ' : '  '}`} ref={ref}
            animate={controls}
            initial="hidden"
            variants={squareVariants}
        >

            <div className={` h-full ${project.phone ? 'lg:w-2/6' : 'lg:min-w-[0%] lg:w-full items-center'}${project.title.includes("Speed") ? 'lg:w-full' : ''}`}>
                <Slideshow images={project.images} phone={project.phone} alt={project.title}></Slideshow>

            </div>
            <div className={`flex flex-col  ${project.phone ? 'lg:w-4/6 ' : 'lg:min-w-2/6 lg:w-full '} ${!isEven && 'lg:text-end'} `}>
                <ProjectInfoSection project={project} index={index} />

            </div >
        </m.div >
    );
};

export default Project;
