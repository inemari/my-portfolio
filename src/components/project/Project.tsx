import React, { FC } from 'react';
import { ProjectItem } from '../../data/projectsData';
import Slideshow from './SlideShow';
// import laptop from '../assets/images/laptopframe-nobg.png';
interface ProjectProps {
    project: ProjectItem;
    index: number;
}




const Project: FC<ProjectProps> = ({ project, index }) => {
    return (
        <div key={index} className='flex flex-row w-full py-20 justify-evenly items-center '>
            <div className="w-1/4">

                <Slideshow images={project.images} phone={project.phone}></Slideshow>

                {/* {project.images.map((image) => (
                    <Slideshow imageSrc={image}></Slideshow>
                ))} */}
            </div>
            <div className='flex flex-col w-2/4'>
                {/* <img src={project.cover} alt={project.title} className='w-full' /> */}
                <h1 className="  font-bold py-5 text-white">{project.title}</h1>
                <p className="text-white text-2xl">{project.longDescription}</p>
            </div>


        </div>
    );
};

export default Project;
