// import projects from '../../data/projectsData';
import { m } from "framer-motion"
import ProjectsHeader from './ProjectsHeader';
import { useEffect, useState } from 'react';
import { supabase } from "../../utils/supabase";
import Project from "./Project";
import { ProjectItem } from "../../data/projectsData";

// import { useInView } from 'react-intersection-observer'; 

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

    const [projects, setProjects] = useState<ProjectItem[]>([]);

    useEffect(() => {
        async function getProjects() { // Mark the function as async
            const { data: projects } = await supabase.from('projects').select();

            if (projects && projects.length > 0) { // Check if projects is not null before updating state
                setProjects(projects);
            }
        }

        getProjects();
    }, []);
    return (
        <m.section className="text-white mx-auto w-full flex h-screen flex-col" >
            <ProjectsHeader />
            <m.div className='flex flex-col  w-full mx-auto justify-between items-center' >
                {projects.map((project, i) => (
                    <Project key={`project-${i}`} project={project} index={i} />
                ))}
            </m.div>

        </m.section>
    );
};

export default Projects;
