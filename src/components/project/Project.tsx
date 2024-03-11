
import { FC } from 'react';
import { ProjectItem } from '../../data/projectsData';
import Slideshow from './SlideShow';
import Blob from '../../assets/images/Vector.png';
import { m } from "framer-motion"

// import laptop from '../assets/images/laptopframe-nobg.png';
interface ProjectProps {
    project: ProjectItem;
    index: number;
}




const Project: FC<ProjectProps> = ({ project, index }) => {

    return (
        <div key={index} className={` grid md:grid-flow-col grid-flow-row h-full w-full py-32 items-center justify-center bg-opacity-50  rounded-2xl ease-in-out `}>

            <m.img src={Blob} alt="" className={`w-1/3  absolute h-[60%] col-span-full   -z-40 ${index % 2 === 0 ? 'end-0 me-24 -mb-36' : 'start-0 ms-24 rotate-180'}`} animate={{ x: [0, 100, 0], animationIterationCount: 10 }} />



            <div className={` h-full  w-full  col-span-3  ${index % 2 === 0 ? 'md:col-start-4' : 'md:col-end-4'} `}>

                <Slideshow images={project.images} phone={project.phone}></Slideshow>

                {/* {project.images.map((image) => (
                    <Slideshow imageSrc={image}></Slideshow>
                ))} */}
            </div>
            <div className={`col-span-4 w-full  flex flex-col   justify-between ${index % 2 === 0 ? 'md:col-end-4 ' : 'md:col-start-4 md:text-end'} `}>
                {/* <img src={project.cover} alt={project.title} className='w-full' /> */}
                <div className='h-full pb-10'>
                    <h3 className=" py-5 text-white font-semibold ">{project.title}</h3>
                    <p className="text-white text-md  ">{project.longDescription}</p>
                    <ul className={`flex flex-row space-x-4 pt-4   ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                        {project.technologies?.map((technology) => (
                            <li className='bg-indigo px-3 py-1 rounded-full text-s'>{technology}</li>))}
                    </ul>
                </div>
                {project.link && (
                    <a href={project.link} ><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/3">
                        Website
                    </button></a>)}
            </div>


        </div >
    );
};

export default Project;
