import projects from '../../data/projectsData';
import Project from '../../components/project/Project';
import { m } from "framer-motion"
import ProjectsHeader from './ProjectsHeader';

const Projects = () => {



    return (
        <m.section className="text-white mx-auto w-full flex h-screen flex-col" >
            <ProjectsHeader />
            <m.div className='flex flex-col  w-full mx-auto justify-between items-center' >
                {/* Display projects */}
                {projects.map((project, i) => (

                    <Project key={`project-${i}`} project={project} index={i} />
                ))}
            </m.div>

        </m.section>
    );
};

export default Projects;
