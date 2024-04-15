import { AnimationConfigWithData } from "lottie-web";
import mdCover from '../assets/images/project-images/ux/mealdeal/md-phone-w-bg.png';
import mdImg1 from '../assets/images/project-images/ux/mealdeal/md-v2-screen-1.png';
import mdImg2 from '../assets/images/project-images/ux/mealdeal/md-v2-screen-2.png';
import mdImg3 from '../assets/images/project-images/ux/mealdeal/md-v2-screen-3.png';
import signify1 from '../assets/images/project-images/signify/signify-1.png';
import signify2 from '../assets/images/project-images/signify/signify-2.png';
import signify3 from '../assets/images/project-images/signify/signify-3.png';
import signify4 from '../assets/images/project-images/signify/signify-4.png';
import signify5 from '../assets/images/project-images/signify/signify-5.png';
import mapImg1 from '../assets/images/project-images/map-project/map-project1.png';
import mapImg2 from '../assets/images/project-images/map-project/map-project2.png';
import mapImg3 from '../assets/images/project-images/map-project/map-project3.png';
import mapImg4 from '../assets/images/project-images/map-project/map-project4.png';
import mapImg5 from '../assets/images/project-images/map-project/map-project5.png';
import flyer from '../assets/images/project-images/promo/flyers.png';
import nametag from '../assets/images/project-images/promo/nametag.png';
import speedviewAdmin1 from '../assets/images/project-images/speedview/speedview-admin-1.png';
import speedviewAdmin2 from '../assets/images/project-images/speedview/speedview-admin-2.png';
import speedviewAdmin3 from '../assets/images/project-images/speedview/speedview-admin-3.png';
import speedviewAdmin4 from '../assets/images/project-images/speedview/speedview-admin-4.png';
import speedviewAdmin5 from '../assets/images/project-images/speedview/speedview-admin-5.png';
import speedviewAdmin6 from '../assets/images/project-images/speedview/speedview-admin-6.png';
import speedviewAdmin7 from '../assets/images/project-images/speedview/speedview-admin-7.png';
import speedviewAdmin8 from '../assets/images/project-images/speedview/speedview-admin-8.png';
import speedviewAdmin9 from '../assets/images/project-images/speedview/speedview-admin-9.png';
import speedviewAdmin10 from '../assets/images/project-images/speedview/speedview-admin-10.png';
import speedviewLogin from '../assets/images/project-images/speedview/speedview-login.png';
import p1 from '../assets/images/project-images/pokemon-catcher/pokemonCatcher (1).png';
import p2 from '../assets/images/project-images/pokemon-catcher/pokemonCatcher (2).png';
import p3 from '../assets/images/project-images/pokemon-catcher/pokemonCatcher (3).png';
import p4 from '../assets/images/project-images/pokemon-catcher/pokemonCatcher (5).png';
import amv1 from '../assets/images/project-images/amv/amv1.png';
import amv2 from '../assets/images/project-images/amv/amv2.png';
import amv3 from '../assets/images/project-images/amv/amv3.png';
import amv4 from '../assets/images/project-images/amv/amv4.png';
import amv5 from '../assets/images/project-images/amv/amv5.png';
import amv6 from '../assets/images/project-images/amv/amv6.png';
export interface ProjectItem {
    id: number;
    title: string;
    shortDescription: string;
    coverAltText?: string;
    cover: string | AnimationConfigWithData | React.ReactNode;
    longDescription: string;
    role?: string;
    images: string[];
    timeStart: number[];
    timeEnd: number[];
    codeLink?: string;
    liveLink?: string;
    phone?: boolean;
    technologies?: string[];
    link?: string | undefined;
    category?: string[];
}
function testImage(randomNumber: number) {
    return `https://picsum.photos/id/${Math.floor(randomNumber * (600 - 100 + 1)) + 100}/600/1000`
}

const projects = [
    {
        id: 1,
        title: "MealDeal: Offers and Recipe App",
        shortDescription: "MealDeal was an Start-up project initiated through UiA Nyskapning. The project aimed to develop a mobile application that streamlined access to food offers and recipes.",
        longDescription: "MealDeal was an Start-up project initiated through UiA Nyskapning. The project aimed to develop a mobile application that streamlined access to food offers and recipes. By presenting users with up-to-date discounts from various stores and suggesting recipes based on these deals, MealDeal sought to simplify meal planning and optimize grocery shopping",
        role: "In this project, my responsibility as a UX designer was to define the app's architecture, screen requirements, and user flow. Subsequently, I developed interactive prototypes tailored for user testing to ensure optimal user experience.",
        cover: mdCover,
        images: [
            mdImg1, mdImg2, mdImg3
        ],
        phone: true,
        timeStart: [8, 2022],
        timeEnd: [6, 2023],
        technologies: ["Figma", "Prototyping", "Farge- og visuell design"],
        category: ['UX']
    },
    {
        id: 2,
        title: "Digitalized Speed Interview Service",
        shortDescription: "The project aimed to automate and enhance administrative tasks associated with the speed interview process for Experis' sales team. Its objective was to replace manual processes, such as creating interview schedules in Excel spreadsheets for clients, with a digital platform.",
        longDescription: "The project focused on developing a web application to automate and enhance administrative tasks associated with the speed interview process for Experis' sales team. Its objective was to replace manual processes, such as creating interview schedules in Excel spreadsheets for clients, with a digital platform. This transition was intended to streamline and enhance interaction between Experis' consultants and their clients, facilitating seamless digital performance of all administrative tasks.",
        role: " In this project, I held dual roles as a Front-End Developer and a Version Control Manager. As a Front-End Developer, I leveraged technologies like React, Tailwind CSS, and TypeScript to develop the user interface for the web application. Additionally, I served as the Git Repository Administrator, overseeing the team's pull requests, conducting merges between branches, resolving any merge conflicts, and ensuring the smooth deployment of updates.",
        cover: testImage(Math.random()),
        images: [
            speedviewAdmin1,
            speedviewAdmin2,
            speedviewAdmin3,
            speedviewAdmin4,
            speedviewAdmin5,
            speedviewAdmin6,
            speedviewAdmin7,
            speedviewAdmin8,
            speedviewAdmin9,
            speedviewAdmin10,
            speedviewLogin,
        ],
        timeStart: [11, 2023],
        timeEnd: [2, 2024],
        technologies: ["React", "Tailwind", "TypeScript"],
        category: ['Programming']
    },
    {
        id: 3,
        title: "Automation of data flow from national map databases to AI algorithms.",
        shortDescription: "The bachelorproject, part of the KartAi research initiative with Tietoevry and Kartverket, aimed to develop a system for retrieving and generating training data for machine learning.",
        longDescription: "The bachelorproject, part of the KartAi research initiative with Tietoevry and Kartverket, aimed to develop a system for retrieving and generating training data for machine learning. We implemented a backend solution for data management and a frontend web application for user interaction.",
        role: 'In this project, I held dual roles as both a frontend developer and UX/UI designer. As a frontend developer, I employed JavaScript and Leaflet for map integration, along with HTML, CSS, and Bootstrap CSS. Concurrently, in my UX/UI designer capacity, I led the design process using Figma, conducted user testing, and iteratively refined the design based on feedback, maintaining a user-centric approach throughout the project.',
        cover: mapImg3,
        images: [mapImg1, mapImg2, mapImg3,
            mapImg4, mapImg5
        ],
        timeStart: [1, 2023],
        timeEnd: [5, 2023],
        link: "https://kompetansetorget.uia.no/fullfoerte-oppgaver/automatisering-av-dataflyt-fra-nasjonale-kartbaser-mot-ai-algoritmer",
        technologies: ["HTML", "CSS", "Leaflet", "JavaScript", "Figma"],
        category: ['Programming', 'UX'],
    },
    // {
    //     id: 4,
    //     title: "HvZ Game Management System",
    //     shortDescription: "HvZ Game Management System var et fire-ukers fullstack prosjekt som gikk ut på å utvikle en webapplikasjon for administrering og koordinering av Human vs Zombies-spill.",
    //     longDescription: "HvZ Game Management System var et fire-ukers fullstack prosjekt som gikk ut på å utvikle en webapplikasjon for administrering og koordinering av Human vs Zombies-spill. Målet var å tilby spillere et oversiktlig grensesnitt samtidig som administratorer skulle ha verktøy for å opprette, administrere og analysere spillene.",
    //     cover: testImage(Math.random()),
    //     images: [
    //         testImage(Math.random()),
    //         testImage(Math.random()),
    //         testImage(Math.random()),
    //         testImage(Math.random()),
    //         testImage(Math.random()),
    //         testImage(Math.random()),
    //     ],
    //     timeStart: [9, 2023],
    //     timeEnd: [10, 2023],
    // codeLink: "https://github.com/inemari/HvZ-Frontend",
    //     technologies: ["React", "Tailwind", "JavaScript", "Figma"],
    //     category: 'Programming' && 'UX',

    // },
    {
        id: 4,
        title: "Signify",
        shortDescription: "SignLangTranslator is a sign language translation application developed using React, JavaScript, HTML, and CSS.",
        longDescription: "SignLangTranslator is a sign language translation application developed using React, JavaScript, HTML, and CSS. This project was completed within a one-week timeframe during the Experis Academy accelerate period. The application serves as a tool for enhancing sign language skills. Users can input letters or words, and the application translates them into corresponding signs, facilitating effective communication.",
        cover: testImage(Math.random()),
        images: [
            signify1, signify2, signify3, signify4, signify5
        ],
        timeStart: [8, 2023],
        timeEnd: [8, 2023],
        liveLink: "https://signify-psi.vercel.app/",
        codeLink: 'https://github.com/inemari/SignLangTranslator',
        category: ['Programming', 'UX'],
        technologies: ["React", "JavaScript", "HTML", "CSS", "Figma"],
        role: "As a member of the team, my role involved contributing to the design and development process of the Signify project. I participated in creating user interface elements and ensuring a seamless user experience. Additionally, I collaborated with other team members to implement features and resolve technical challenges."
    },
    {
        id: 6,
        title: "Pokemon Trainer",
        shortDescription: "Pokemon Trainer is a web application where a user creates a Trainer account, catches Pokémon, and views them on their trainer page. ",
        longDescription: "Pokemon Trainer is a web application where a user creates a Trainer account, catches Pokémon, and views them on their trainer page. It was developed using Angular, Typescript, and Tailwind CSS in a one-week timeframe during the Experis Academy accelerate period.",
        cover: testImage(Math.random()),
        images: [p1, p2, p3, p4],
        timeStart: [8, 2023],
        timeEnd: [8, 2023],
        codeLink: 'https://github.com/inemari/pokemonTrainer',
        liveLink: 'https://pokemon-trainer-wheat.vercel.app/login',
        technologies: ["Angular", "Typescript", "Tailwind CSS", "Figma"],
        category: ['Programming', 'UX'], // Change category to an array if you want to include multiple categories
        role: "As a UX designer, I developed the idea for the design and a mockup in Figma. Additionally, I was a frontend developer contributing to the development of the project."
    },
    {
        id: 5,
        title: "Promotion and Branding at Career Fairs",
        shortDescription: "Contributed to Experis Academy's promotion during career events at UiA in Grimstad and Career Week in Kristiansand.",
        longDescription: "Contributed to Experis Academy's promotion during career events at UiA in Grimstad and Career Week in Kristiansand. These events provided opportunities for companies to present their organizations and career prospects to university students.",
        role: "Played a pivotal role in designing and developing promotional materials at Experis Academy's booth. Responsibilities included creating presentations, flyers, name tags, and posters to effectively communicate Experis Academy's offerings and engage with visiting students.",
        cover: testImage(Math.random()),
        images: [
            nametag, flyer
        ],
        timeStart: [2, 2024],
        timeEnd: [2, 2024],
        category: ['Graphic design'],
        technologies: ["Canva", "Adobe Photoshop", "Adobe Express"],
    },
    {
        id: 6,
        title: "AMV equipment rental system",
        shortDescription: " The project involved the design and development of an equipment rental application accessible on both mobile devices and PCs, tailored for the company AMV.",
        longDescription: " The project involved the design and development of an equipment rental application accessible on both mobile devices and PCs, tailored for the company AMV.",
        role: "As a UX designer, my responsibility was to design sketches and prototypes based on requirements and task descriptions. Concurrently, I led frontend development, driving the implementation of designs using HTML, CSS, and JavaScript. Additionally, I took on the responsibility of scrum master, ensuring efficient project management and team coordination.",
        cover: testImage(Math.random()),
        images: [
            amv1, amv2, amv3, amv4, amv5, amv6
        ],
        timeStart: [8, 2021],
        timeEnd: [12, 2021],
        category: ['Programming', 'UX'],
        technologies: ["HTML", "CSS", "Figma", "Javascript"],
    },
]
export default projects;
