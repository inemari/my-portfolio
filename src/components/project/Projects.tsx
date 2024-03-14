import projects, { ProjectItem } from '../../data/projectsData';
import Project from '../../components/project/Project';
import { m } from "framer-motion"

// import { useInView } from 'react-intersection-observer'; // Import useInView from the correct library

const sortByEndDate = (projects: ProjectItem[]) => {
    return projects.sort((a, b) => {
        const aEndDate = a.timeEnd || [0, 0];
        const bEndDate = b.timeEnd || [0, 0];
        if (aEndDate[1] !== bEndDate[1]) {
            return bEndDate[1] - aEndDate[1];
        }
        return bEndDate[0] - aEndDate[0];
    });
};

const Projects = () => {
    const developmentProjects = projects.filter(project => project.category === 'Programming');
    const uxProjects = projects.filter(project => project.category === 'UX');
    const otherProjects = projects.filter(project => project.category !== 'UX' && project.category !== 'Programming');

    const allProjects = [...sortByEndDate(developmentProjects), ...sortByEndDate(uxProjects), ...sortByEndDate(otherProjects)];


    return (
        <m.section className="text-white mx-auto w-full " id="projects">
            <div className="flex flex-row w-full ">
                <div className="flex-col w-full mb-5 justify-center items-center text-center flex">
                    <h1 className="font- mb-5 border-b-[8px] pl-3 w-[50px] border-indigo pb-2">
                        Projects
                    </h1>
                    <p className="pb-5 text-xl">
                        These are some of my best projects...[more text]It should be noted that my access to some projects were limited, and that the graphic representation of the projects might be flawed,for example website content might not be centered etc.
                    </p>
                </div>
            </div>
            <m.div className='flex flex-col py-10 gap-6 w-full mx-auto ' >
                {/* Display projects */}
                {allProjects.map((project, i) => (
                    <div className='h-fit relative w-full p-5 left-0' >
                        <Project key={`project-${i}`} project={project} index={i} /></div>
                ))}
            </m.div>
        </m.section>
    );
};

export default Projects;
