import projects from '../../data/projectsData';
import Project from '../../components/project/Project';
import { m } from "framer-motion"
import ProjectsHeader from './ProjectsHeader';

// import { useInView } from 'react-intersection-observer'; // Import useInView from the correct library

// const sortByEndDate = (projects: ProjectItem[]) => {
//     return projects.sort((a, b) => {
//         const aEndDate = a.timeEnd || [0, 0];
//         const bEndDate = b.timeEnd || [0, 0];
//         if (aEndDate[1] !== bEndDate[1]) {
//             return bEndDate[1] - aEndDate[1];
//         }
//         return bEndDate[0] - aEndDate[0];
//     });
// };

const Projects = () => {
    const developmentProjects = projects.filter(project => project.category === 'Programming');
    const uxProjects = projects.filter(project => project.category === 'UX');
    const otherProjects = projects.filter(project => project.category !== 'UX' && project.category !== 'Programming');

    const allProjects = [...(developmentProjects), ...(uxProjects), ...(otherProjects)];


    return (
        <m.section className="text-white mx-auto w-full flex h-screen flex-col" >
            <ProjectsHeader />
            <m.div className='flex flex-col h-screen w-full mx-auto ' >
                {/* Display projects */}
                {allProjects.map((project, i) => (
                    <div className='' >
                        <Project key={`project-${i}`} project={project} index={i} /></div>
                ))}
            </m.div>
        </m.section>
    );
};

export default Projects;
