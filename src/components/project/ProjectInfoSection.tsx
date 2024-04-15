
import { m } from "framer-motion"

import { ProjectItem } from '../../data/projectsData';
import { Button } from '../Button';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { IoDocumentText } from "react-icons/io5";
import React from "react";
// import { IoIosArrowDown } from "react-icons/io";
type Props = {
    project: ProjectItem;
    isEven: boolean;
}
// let width = window.innerWidth
//     || document.documentElement.clientWidth
//     || document.body.clientWidth;
// const laptop = width < 992;
export default function ProjectInfoSection({ project, isEven }: Props) {
    // const [isOpen, setIsOpen] = useState(false)
    const variants = {
        open: {
            opacity: 1, x: 0, transition: { duration: 1 }
        },
        closed: { opacity: 0, x: "-100%" },
    }

    const formatDate = (unformattedDate: number[]) => {
        const [day, month] = unformattedDate;
        const formattedDay = day < 10 ? `0${day}` : `${day}`;
        const formattedMonth = month < 10 ? `0${month}` : `${month}`;
        return `${formattedDay}, ${formattedMonth}`;
    };
    return (
        <>
            <m.div className={` w-full flex pb-10 cursor-auto text-white z-50 flex-col justify-between md:h-[60%]`}>
                <div className={`flex flex-col py-5 capitalize ${isEven ? '  text-start ' : 'text-end'}`}>
                    <h3 className=" font-semibold w-full pb-1">{project.title}</h3>
                    {project.category && project.category.length > 0 && (
                        <p className={`text-indigo font-bold whitespace-pre uppercase ${isEven ? 'text-start' : 'text-end'}`}>
                            {project.category.map((category, index) => (
                                <React.Fragment key={category}>
                                    {index > 0 && ' & '}
                                    {category}
                                </React.Fragment>
                            ))}
                        </p>
                    )}
                </div>

                <m.p className=" text-md  " variants={variants}>{project.longDescription}</m.p>
                {/* Expand shortdescription to longdescription */}
                {/* {laptop&&(
                {open ? (

                    <m.p className=" text-md  " animate={isOpen ? "open" : "closed"} transition={{ ease: "easeInOut", duration: 2 }} variants={variants}>{project.longDescription}</m.p>

                ) : (<m.p className=" text-md  ">{project.shortDescription}</m.p>)
                } 
                <button className=" flex flex-row items-center space-x-2 border-none  cursor-pointer" onClick={() => setIsOpen(isOpen => !isOpen)}  >
                    <h4>{`Read ${open ? "Less" : "More"}`}</h4>
                    <IoIosArrowDown className={`${open && 'rotate-180'}`} />
                </button> 
)} */}
                <div className='my-3'>
                    <h4>My role</h4>
                    <m.p className="text-md  ">{project.role}</m.p>
                </div>
                <div className={`flex flex-col pt-4 gap-3 justify-start  ${isEven ? 'items-start' : ' items-end'}`}>
                    <p>{formatDate(project.timeStart)}
                        - {formatDate(project.timeEnd)}</p>
                    <ul className={`flex flex-row space-x-4 pt-4 `}>
                        {project.technologies?.map((technology) => (
                            <li className={`bg-indigo bg-opacity-20 px-3 py-1 rounded-full text-white opacity-90`}>{technology}</li>))}
                    </ul>

                </div><div className={`flex flex-row gap-3 py-3 h-f mb-0 items-center  ${isEven ? ' md:flex-row -mr-6' : ' md:flex-row-reverse -ml-6'}`}>
                    {
                        project.liveLink && (
                            <Button buttonText='Website' link={project.liveLink}>
                                <FaExternalLinkAlt />
                            </Button>
                        )}
                    {project.codeLink && (
                        <Button buttonText='Code' link={project.codeLink}>
                            <FaGithub />
                        </Button>
                    )
                    }
                    {project.link && (
                        <Button buttonText='Bachelor Thesis' link={project.link}>
                            <IoDocumentText />
                        </Button>
                    )
                    }</div>
            </m.div >
        </>
    )
}