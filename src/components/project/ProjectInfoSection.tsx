
import { m } from "framer-motion"

import { ProjectItem } from '../../data/projectsData';
import { Button } from '../Button';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { IoDocumentText } from "react-icons/io5";
type Props = {
    project: ProjectItem;
    isEven: boolean;
}

export default function ProjectInfoSection({ project, isEven }: Props) {
    // const [isOpen, setIsOpen] = useState(false)
    const variants = {
        open: {
            opacity: 1, x: 0, transition: { duration: 1 }
        },
        closed: { opacity: 0, x: "-100%" },
    }
    return (
        <>
            <m.div className={` w-full justify-center flex pb-10 cursor-auto text-white z-50 flex-col `}>
                <div className={`flex items-center justify-between p-1 ${isEven ? ' md:flex-row ' : ' md:flex-row-reverse ml-6'}`}>
                    <h3 className=" py-5 font-semibold w-full">{project.title}</h3>


                </div>
                <m.p className=" text-md  " variants={variants}>{project.longDescription}</m.p>


                {/* Expand shortdescription to longdescription */}
                {/* {isOpen ? (

                    <m.p className=" text-md  " animate={isOpen ? "open" : "closed"} transition={{ ease: "easeInOut", duration: 2 }} variants={variants}>{project.longDescription}</m.p>

                ) : (<m.p className=" text-md  ">{project.shortDescription}</m.p>)
                } 
                <button className=" flex flex-row items-center space-x-2 border-none  cursor-pointer" onClick={() => setIsOpen(isOpen => !isOpen)}  >
                    <h4>{`Read ${isOpen ? "Less" : "More"}`}</h4>
                    <IoIosArrowDown className={`${isOpen && 'rotate-180'}`} />
                </button> */}

                <div className='my-3'>
                    <h4>My role</h4>
                    <m.p className="text-md  ">{project.role}</m.p>
                </div>
                <div className={`flex flex-col pt-4 gap-3 justify-start  ${isEven ? 'items-start' : ' items-end'}`}>

                    <ul className={`flex flex-row space-x-4 pt-4 `}>
                        {project.technologies?.map((technology) => (
                            <li className='bg-indigo px-3 py-1 rounded-full bg-opacity-25'>{technology}</li>))}
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