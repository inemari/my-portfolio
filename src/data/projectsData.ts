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
import speedviewAdmin1 from 'C:/dev/git/portfolio/my-portfolio/src/assets/images/project-images/speedview/speedview-admin-1.png';
import speedviewAdmin2 from 'C:/dev/git/portfolio/my-portfolio/src/assets/images/project-images/speedview/speedview-admin-2.png';
import speedviewAdmin3 from 'C:/dev/git/portfolio/my-portfolio/src/assets/images/project-images/speedview/speedview-admin-3.png';
import speedviewAdmin4 from 'C:/dev/git/portfolio/my-portfolio/src/assets/images/project-images/speedview/speedview-admin-4.png';
import speedviewAdmin5 from 'C:/dev/git/portfolio/my-portfolio/src/assets/images/project-images/speedview/speedview-admin-5.png';
import speedviewAdmin6 from 'C:/dev/git/portfolio/my-portfolio/src/assets/images/project-images/speedview/speedview-admin-6.png';
import speedviewAdmin7 from 'C:/dev/git/portfolio/my-portfolio/src/assets/images/project-images/speedview/speedview-admin-7.png';
import speedviewAdmin8 from 'C:/dev/git/portfolio/my-portfolio/src/assets/images/project-images/speedview/speedview-admin-8.png';
import speedviewAdmin9 from 'C:/dev/git/portfolio/my-portfolio/src/assets/images/project-images/speedview/speedview-admin-9.png';
import speedviewAdmin10 from 'C:/dev/git/portfolio/my-portfolio/src/assets/images/project-images/speedview/speedview-admin-10.png';
import speedviewLogin from 'C:/dev/git/portfolio/my-portfolio/src/assets/images/project-images/speedview/speedview-login.png';


export interface ProjectItem {
    id: number;
    title: string;
    shortDescription: string;
    coverAltText?: string;
    cover: string | AnimationConfigWithData | React.ReactNode;
    longDescription: string;
    images: string[];
    timeStart: number[];
    timeEnd: number[] | null;
    codeLink?: string;
    liveLink?: string;
    phone?: boolean;
    technologies?: string[];
    link?: string;
    category?: 'UX' | & 'Programming' | string;
}
function testImage(randomNumber: number) {
    return `https://picsum.photos/id/${Math.floor(randomNumber * (600 - 100 + 1)) + 100}/600/1000`
}

const projects = [
    {
        id: 2,
        title: "MealDeal: Offers and Recipe App",
        shortDescription: "A mobile application that effectively combines food offers with recipes.",
        longDescription: "MealDeal is a mobile application that effectively combines food offers with recipes. The project was developed as a start-up project through UiA Nyskapning. The goal was to provide users with an overview of current offers from different grocery stores, while also suggesting recipes based on available discounted items. This made it easy for users to plan meals, create shopping lists, and optimize their grocery shopping.",
        cover: mdCover,
        images: [
            mdImg1, mdImg2, mdImg3
        ],
        phone: true,
        timeStart: [8, 2022],
        timeEnd: [6, 2023],
        technologies: ["Figma", "Prototyping", "Farge- og visuell design"],
        category: 'UX'
    },
    {
        id: 3,
        title: "Digitalized Speed Interview Service",
        shortDescription: "The project focuses on automating and improving administrative tasks related to the speed interview process for Experis' sales team.",
        longDescription: "The project focuses on automating and improving administrative tasks related to the speed interview process for Experis' sales team. The goal is to replace manual processes, including creating interview schedules in Excel spreadsheets for clients, with a digital platform. This aims to streamline and improve the interaction between Experis' consultants and their clients, so that all administrative tasks can be easily performed digitally. **In this project, I played a key role as both a Front-End Developer and a Version Control Manager.** As a Front-End Developer, I utilized technologies like React, Tailwind CSS, and TypeScript to develop the user interface for the digital platform. Additionally, I served as the Git Repository Administrator, managing the team's pull requests, performing merges between branches, resolving any merge conflicts, and ensuring smooth deployment of updates.",
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
        category: 'Programming'
    },
    {
        "id": 56,
        "title": "Automated Data Flow from National Map Databases to AI Algorithms",
        "shortDescription": "Contributed to the KartAi research project by automating data retrieval and generation for machine learning.",
        "longDescription": "As a frontend developer, I played a significant role in developing the website's front-end. This involved using key programming languages such as HTML, CSS, and JavaScript. I utilized the JavaScript library Leaflet to implement maps and map functions on the web interface. Additionally, the CSS framework Bootstrap was employed. As a UX designer, I developed the prototype for a web-based solution for ordering map data, which was to be used for training AI models. I also conducted user testing of the prototype and made necessary revisions based on feedback.",
        "cover": mapImg3,
        "images": [mapImg1, mapImg2, mapImg3,



            mapImg4, mapImg5
        ],
        timeStart: [1, 2023],
        timeEnd: [5, 2023],
        technologies: ["HTML", "CSS", "Leaflet", "JavaScript", "Figma"],
        category: 'Programming' && 'UX',
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
    //     technologies: ["React", "Tailwind", "JavaScript", "Figma"],
    //     category: 'Programming' && 'UX',

    // },
    {
        id: 5,
        title: "Signify",
        shortDescription: "Prosjektet fokuserte på å utvikle en nettside som var dedikert til intern utlån av maskiner og utstyr innenfor bedriften.",
        longDescription: "A longer description for the Nettbasert utleiesystem project. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        cover: testImage(Math.random()),
        images: [
            signify1, signify2, signify3, signify4, signify5
        ],
        timeStart: [8, 2023],
        timeEnd: [8, 2023],
        link: "https://signify-psi.vercel.app/",
        category: 'Programming' && 'UX',
    },
    // {
    //     id: 54,
    //     title: "Nettbasert utleiesystem",
    //     shortDescription: "Prosjektet fokuserte på å utvikle en nettside som var dedikert til intern utlån av maskiner og utstyr innenfor bedriften.",
    //     longDescription: "A longer description for the Nettbasert utleiesystem project. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //     cover: testImage(Math.random()),
    //     images: [
    //         testImage(Math.random()),
    //         testImage(Math.random()),
    //         testImage(Math.random()),
    //         testImage(Math.random()),
    //         testImage(Math.random()),
    //         testImage(Math.random()),
    //     ],
    //     timeStart: [9, 2021],
    //     timeEnd: null, // Ongoing project
    //     category: 'Programming' && 'UX',
    // },


    {
        id: 55,
        title: "Promotion and Branding at Career Fairs",
        shortDescription: "Led promotion and branding efforts for Experis Academy during career days at UiA in Grimstad and Career Week in Kristiansand.",
        longDescription: "As part of my role, I designed a dynamic presentation for the booth's screen to inform and attract attention. I also created flyers with relevant information, images, personalized QR codes, and other elements to advertise Experis Academy. Additionally, I edited previously captured images of Experis employees to create name tags with their photos and job titles. Furthermore, I crafted a poster to promote a competition-based game at the booth, including game rules and prize presentation.",
        cover: testImage(Math.random()),
        images: [
            nametag, flyer
        ],
        timeStart: [2, 2024],
        timeEnd: [2, 2024],
        category: ['Promotion', 'Design', 'Communication'],
        technologies: ["Canva", "Photo Editing Software", "Poster Design Tools"],
    },
]
export default projects;
