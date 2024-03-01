import { FC } from 'react';
import { ProjectItem } from '../../data/projectsData';
import Slideshow from './SlideShow';
// import laptop from '../assets/images/laptopframe-nobg.png';
interface ProjectProps {
    project: ProjectItem;
    index: number;
}




const Project: FC<ProjectProps> = ({ project, index }) => {
    return (
        <div key={index} className={`flex flex-col lg:flex-row w-full justify-center items-center lg:space-y-10 my-auto bg-indigo-500 bg-opacity-50 p-5 rounded-2xl ease-in-out `}>
            <div className={`w-full h-full flex  bg-opacity-30  justify-center p-1 ${index % 2 === 0 ? 'start-0 self-start' : 'end-0 self-end'}`}>
                <div className={``}>
                    <Slideshow images={project.images} phone={project.phone}></Slideshow>

                    {/* {project.images.map((image) => (
                    <Slideshow imageSrc={image}></Slideshow>
                ))} */}</div>
            </div>
            <div className='flex flex-col w-full'>
                {/* <img src={project.cover} alt={project.title} className='w-full' /> */}
                <h2 className="  font-bold py-5 text-white">{project.title}</h2>
                <p className="text-white text-lg">{project.longDescription}</p>
            </div>


        </div>
    );
};

export default Project;
