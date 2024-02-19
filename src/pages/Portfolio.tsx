import React from 'react'
import projects from '../data/projectsData';

function Portfolio() {

    return (
        <section className="bg-primary text-white px-5 py-32" id="projects">
            <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
                <div className="about-info mb-5">
                    <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
                        Projects
                    </h2>

                    <p className="pb-5">
                        These are some of my best projects. I have built these with React,
                        MERN and vanilla CSS. Check them out.
                    </p>
                </div>

                <div className="about-img"></div>
            </div>

            <div className="projects container mx-auto grid md:grid-cols-3 gap-10 ">
                {projects.map((project, i) => {
                    return (
                        <div className="relative py-5 " key={i}>
                            <img src={project.imageSrc} alt={project.title} />
                            <p className="  font-bold py-5 text-white">
                                {project.title}  </p>
                            <p className=" text-white">
                                {project.description}
                            </p>

                            <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">


                                <div className="mx-auto">
                                    <a
                                        href={"#"}
                                        className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                                    >
                                        Live
                                    </a>
                                    <a
                                        href={"#"}
                                        className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                                    >
                                        Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
export default Portfolio