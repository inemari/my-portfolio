import React, { useState } from 'react'
import { m } from "framer-motion"
import { IoIosArrowDown } from 'react-icons/io';
import { ProjectItem } from '../../data/projectsData';
import { FaExternalLinkAlt } from "react-icons/fa";
type Props = {
    project: ProjectItem;
    index: number;
}

export default function ProjectInfoSection({ project, index }: Props) {
    const [isOpen, setIsOpen] = useState(false)
    const variants = {
        open: {
            opacity: 1, x: 0, transition: { duration: 1 }
        },
        closed: { opacity: 0, x: "-100%" },
    }
    return (
        <>
            <m.div className='h-full w-full pb-10 cursor-auto'>
                <h3 className=" py-5 text-white font-semibold ">{project.title}</h3>
                {isOpen ? (

                    <m.p className="text-white text-md  " animate={isOpen ? "open" : "closed"} transition={{ ease: "easeInOut", duration: 2 }} variants={variants}>{project.longDescription}</m.p>

                ) : (<m.p className="text-white text-md  ">{project.shortDescription}</m.p>)
                }

                <div className={`flex flex-col pt-4   ${index % 2 === 0 ? 'justify-start items-start' : 'justify-end items-end'}`}>
                    <button className=" text-white font-bold py-2 flex flex-row items-center space-x-2 border-none  cursor-pointer" onClick={() => setIsOpen(isOpen => !isOpen)}  >
                        <p>{`Read ${isOpen ? "Less" : "More"}`}</p>
                        <IoIosArrowDown className={`${isOpen && 'rotate-180'}`} />
                    </button>

                    <ul className={`flex flex-row space-x-4 pt-4 `}>
                        {project.technologies?.map((technology) => (
                            <li className='bg-indigo px-3 py-1 rounded-full'>{technology}</li>))}
                        {
                            project.link && (
                                <a href={project.link} >
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex flex-row items-center">
                                        Website
                                        <FaExternalLinkAlt className='pl-2 h-full w-full' />
                                    </button>
                                </a>
                            )
                        }
                    </ul>

                </div>
            </m.div>
        </>
    )
}