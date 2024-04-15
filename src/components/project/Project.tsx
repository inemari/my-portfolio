import { FC, useEffect } from 'react';
import { ProjectItem } from '../../data/projectsData';
import Slideshow from '../Slideshow/SlideShow';
import { m, useAnimation } from 'framer-motion';
import ProjectInfoSection from './ProjectInfoSection';
import { useInView } from "react-intersection-observer";

interface ProjectProps {
    project: ProjectItem;
    index: number;
}

const slideRight = {
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "easeInOut",
            bounce: 0.8,
            duration: 0.8,
        },
    },
    hidden: {
        x: -500,
        opacity: 0,
    },
};

const slideLeft = {
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "easeInOut",
            duration: 0.8,
        },
    },
    hidden: {
        x: 500,
        opacity: 0,
    },
};

const Project: FC<ProjectProps> = ({ project, index }) => {
    const isEven = index % 2 === 0;
    const [ref, inView] = useInView({ threshold: 0.2 });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <m.div
            className={`min-h-[90vh] flex flex-col justify-center items-center ${index === 0 ? 'md:snap-end ' : ' md:snap-center '
                }`}
            ref={ref}
            initial={"md:hidden"}
            variants={isEven ? slideRight : slideLeft}
            animate={inView ? "visible" : "md:hidden"} // Animate based on inView
        >
            <m.div
                key={index}
                className={`flex md:flex-row flex-col h-full z-10 w-full items-center justify-between ${isEven ? ' md:flex-row-reverse ' : ' '
                    }`}
            >
                <div
                    className={`h-full flex flex-col items-center justify-center ${project.phone ? 'md:w-2/6' : 'md:min-w-[0%] md:w-full'
                        }${project.title.includes("Speed") ? 'md:w-full' : ''}`}
                >
                    <Slideshow images={project.images} phone={project.phone} alt={project.title} />
                </div>
                <div
                    className={`flex flex-col h-full justify-center items-center ${project.phone ? 'md:w-4/6 ' : 'md:min-w-2/6 md:w-full '
                        } ${!isEven && 'md:text-end'}`}
                >
                    <ProjectInfoSection project={project} isEven={isEven} />
                </div>
            </m.div>
        </m.div>
    );
};

export default Project;
