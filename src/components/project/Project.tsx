
import { FC } from 'react';
import { ProjectItem } from '../../data/projectsData';
import Slideshow from './SlideShow';
import { m } from 'framer-motion'
import ProjectInfoSection from './ProjectInfoSection';


// import laptop from '../assets/images/laptopframe-nobg.png';
interface ProjectProps {
    project: ProjectItem;
    index: number;
}




const Project: FC<ProjectProps> = ({ project, index }) => {
    const isEven = index % 2 === 0;



    return (
        <m.div key={index} className={`h-full flex lg:flex-row flex-col z-10 w-full items-center justify-start lg:justify-center rounded-2xl ease-in-out  ${isEven ? 'lg:flex-row-reverse ' : ''}`} >

            <div className={` h-full lg:w-1/2 w-full mr-0 ml-auto  ${index % 2 === 0 ? 'lg:col-start-4' : 'lg:col-end-4 end-0 text-end'} `}>
                <Slideshow images={project.images} phone={project.phone} alt={project.title}></Slideshow>
                {/* {isEven && (
                    <div className='bg-indigo absolute -z-10 w-[calc(43%)]   h-[calc(80%)] -mt-80 right-0 bg-opacity-45 '></div>
                )} */}
            </div>
            <div className={`flex flex-col w-full  ${project.phone ? 'w-full ' : 'w-full lg:w-1/2 '} ${isEven ? 'lg:pl-14' : 'lg:text-end lg:pr-14 '} `}>
                <ProjectInfoSection project={project} index={index} />

            </div >
        </m.div >
    );
};

export default Project;
