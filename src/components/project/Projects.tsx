import React from 'react'
import projects from '../../data/projectsData';
import Project from '../../components/project/Project';

const Projects = () => {

    const developmentProjects = [...projects.development];
    const uxProjects = [...projects.ux];

    // Sorting development projects by end date (latest first)
    developmentProjects.sort((a, b) => {
        const aEndDate = a.timeEnd || [0, 0];
        const bEndDate = b.timeEnd || [0, 0];
        if (aEndDate[1] !== bEndDate[1]) {
            return bEndDate[1] - aEndDate[1];
        }
        return bEndDate[0] - aEndDate[0];
    });

    // Sorting UX projects by end date (latest first)
    uxProjects.sort((a, b) => {
        const aEndDate = a.timeEnd || [0, 0];
        const bEndDate = b.timeEnd || [0, 0];
        if (aEndDate[1] !== bEndDate[1]) {
            return bEndDate[1] - aEndDate[1];
        }
        return bEndDate[0] - aEndDate[0];
    });

    return (
        <section className="bg-primary text-white " id="projects">
            <div className="flex flex-row ">
                <div className="flex-col w-full mb-5 justify-center items-center text-center flex">
                    <h1 className=" font-bold mb-5 border-b-[14px] w-[50px] border-indigo-600 pb-2">
                        Projects
                    </h1>

                    <p className="pb-5 text-3xl">
                        These are some of my best projects. I have built these with React,
                        Typescript and Tailwind CSS. Check them out.
                    </p>
                </div>

                <div className="about-img"></div>
            </div>

            <div className='grid grid-flow-row py-10 gap-6'>
                {/* Display development projects */}
                {developmentProjects.map((project, i) => (
                    <Project key={`dev-${i}`} project={project} index={i}></Project>
                ))}
                {/* Display UX projects */}
                {uxProjects.map((project, i) => (
                    <Project key={`ux-${i}`} project={project} index={i}></Project>
                ))}
            </div>

        </section>
    );
}
export default Projects