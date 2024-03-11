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
import mapImg6 from '../assets/images/project-images/map-project/map-project6.png';
import mapImg7 from '../assets/images/project-images/map-project/map-project7.png';
import mapImg8 from '../assets/images/project-images/map-project/map-project8.png';
import mapImg9 from '../assets/images/project-images/map-project/map-project9.png';


import CardItem from './CardItem';


export interface ProjectItem extends CardItem {
    longDescription: string;
    images: string[];
    timeStart: number[];
    timeEnd: number[] | null;
    codeLink?: string;
    liveLink?: string;
    phone?: boolean;
    technologies?: string[];
    link?: string;
}
function testImage(randomNumber: number) {
    return `https://picsum.photos/id/${Math.floor(randomNumber * (600 - 100 + 1)) + 100}/600/1000`
}

const projects: { ux: ProjectItem[]; development: ProjectItem[] } = {

    ux: [
        {
            id: 2,
            title: "MealDeal",
            shortDescription: "Mobilapp-prosjekt for å kombinere mattilbud og oppskrifter. Gir oversikt over tilbud fra alle butikker, foreslår oppskrifter basert på tilbudsvarer, og lar brukerne lage handleliste direkte i appen. Unik tilnærming til enkel og intuitiv utforskning av tilbudsvarer. Forenkler brukernes dagligvarehandel med fokus på effektivitet og brukervennlighet.",
            longDescription: "Prosjektets formål var å utvikle en mobilapplikasjon som effektivt kombinerte mattilbud med oppskrifter. Målet var å gi brukerne en oversikt over aktuelle tilbud fra forskjellige matbutikker, samtidig som appen skulle foreslå oppskrifter basert på tilgjengelige tilbudsvarer. Dette gjorde det enkelt for brukerne å planlegge måltider, lage handlelister og optimalisere dagligvarehandelen. Min rolle som UX-designer innebar ansvaret for å skape en intuitiv og brukervennlig design for applikasjonen. Dette inkluderte å utforske hvordan grensesnittet skulle se ut, organisere informasjonen på en effektiv måte, og skape en interaktiv prototype for å visualisere brukeropplevelsen. Målet var å sikre at applikasjonen var visuelt tiltalende, lett å navigere og oppfylte brukernes behov på en optimal måte.",
            cover: mdCover,
            images: [
                mdImg1, mdImg2, mdImg3
            ],
            phone: true,
            timeStart: [8, 2022],
            timeEnd: [6, 2023],
            technologies: ["Figma", "Prototyping", "Farge- og visuell design"],

        },
    ],
    development: [
        {
            id: 3,
            title: "Digitalisert Speedinterview-tjeneste",
            shortDescription: "Prosjektet fokuserer på å automatisere og forbedre administrative oppgaver knyttet til speedintervjuprosessen for Experis' salgsteam.",
            longDescription: "Prosjektet fokuserer på å automatisere og forbedre administrative oppgaver knyttet til speedintervjuprosessen for Experis' salgsteam. Målet er å erstatte manuelle prosesser, inkludert opprettelse av intervjuplaner i Excel i ark-format for kunder, med en digital plattform. Dette har til hensikt å effektivisere og forbedre interaksjonen mellom Experis' konsulenter og deres kunder, slik at alle administrative oppgaver enkelt kan utføres digitalt. Selgere får muligheten til å håndtere administrative oppgaver, mens kunder får tilgang til en forbedret digital plattform for oversikt over sine kommende intervjuer. Prosjektet ble implementert ved hjelp av moderne teknologier, inkludert TypeScript og React for front-end, samt .NET/C# og Azure for back-end.  ",
            cover: testImage(Math.random()),
            images: [
                `https://picsum.photos/id/${Math.floor(Math.random() * (600 - 100 + 1)) + 100}/600/1000`,
                testImage(Math.random()),
                testImage(Math.random()),
                testImage(Math.random()),
                testImage(Math.random()),
                testImage(Math.random()),
                testImage(Math.random()),
            ],
            timeStart: [11, 2023],
            timeEnd: [2, 2024],
            technologies: ["React", "Tailwind", "TypeScript"],

        },
        {
            id: 1,
            title: "Automatisering av dataflyt fra nasjonale kartbaser til AI-algoritmer",
            shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
            longDescription: "A longer description for the UX project. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            cover: testImage(Math.random()),
            images: [
                // mapImg1,
                mapImg2,
                mapImg3,
                mapImg4,
                mapImg5,
                mapImg6,
                mapImg7,
                mapImg8,
                mapImg9,
            ],
            timeStart: [1, 2023],
            timeEnd: [5, 2023],
            technologies: ["HTML", "CSS", "Leaflet", "JavaScript", "Figma"],
        },
        {
            id: 4,
            title: "HvZ Game Management System",
            shortDescription: "HvZ Game Management System var et fire-ukers fullstack prosjekt som gikk ut på å utvikle en webapplikasjon for administrering og koordinering av Human vs Zombies-spill.",
            longDescription: "HvZ Game Management System var et fire-ukers fullstack prosjekt som gikk ut på å utvikle en webapplikasjon for administrering og koordinering av Human vs Zombies-spill. Målet var å tilby spillere et oversiktlig grensesnitt samtidig som administratorer skulle ha verktøy for å opprette, administrere og analysere spillene.",
            cover: testImage(Math.random()),
            images: [
                testImage(Math.random()),
                testImage(Math.random()),
                testImage(Math.random()),
                testImage(Math.random()),
                testImage(Math.random()),
                testImage(Math.random()),
            ],
            timeStart: [9, 2023],
            timeEnd: [10, 2023],
            technologies: ["React", "Tailwind", "JavaScript", "Figma"],

        },
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
        },
        {
            id: 54,
            title: "Nettbasert utleiesystem",
            shortDescription: "Prosjektet fokuserte på å utvikle en nettside som var dedikert til intern utlån av maskiner og utstyr innenfor bedriften.",
            longDescription: "A longer description for the Nettbasert utleiesystem project. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            cover: testImage(Math.random()),
            images: [
                testImage(Math.random()),
                testImage(Math.random()),
                testImage(Math.random()),
                testImage(Math.random()),
                testImage(Math.random()),
                testImage(Math.random()),
            ],
            timeStart: [9, 2021],
            timeEnd: null, // Ongoing project
        },
    ],
};

export default projects;
