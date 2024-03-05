
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
        <div key={index} className={` grid grid-flow-col h-full w-full  items-center justify-center bg-opacity-50 py-6 rounded-2xl ease-in-out `}>

            <m.img src={Blob} alt="" className={`w-1/3  absolute h-[60%] col-span-full   -z-40 ${index % 2 === 0 ? 'end-0 me-24 -mb-36' : 'start-0 ms-24 rotate-180'}`} animate={{ x: [0, 100, 0], animationIterationCount: 10 }} />



            <div className={` h-full  w-full  col-span-3   ${index % 2 === 0 ? 'col-start-4' : 'col-end-4'} `}>

                <Slideshow images={project.images} phone={project.phone}></Slideshow>

                {/* {project.images.map((image) => (
                    <Slideshow imageSrc={image}></Slideshow>
                ))} */}
            </div>
            <div className={`col-span-4 w-full  items-center  content-center justify-items-center   ${index % 2 === 0 ? 'col-end-4 ' : 'col-start-4 text-end'} `}>
                {/* <img src={project.cover} alt={project.title} className='w-full' /> */}

                <h2 className="  font-bold py-5 text-white ">{project.title}</h2>
                <p className="text-white text-lg  ">{project.longDescription}</p>
            </div>


        </div>
    );
};

export default Project;
