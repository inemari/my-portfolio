import mealDealImage from '../assets/images/project-images/ux/md-phone-w-bg.png';

const projects = {
    ux: [
        {
            id: 2,
            title: "MealDeal",
            shortDescription: "Mobilapp-prosjekt for å kombinere mattilbud og oppskrifter. Gir oversikt over tilbud fra alle butikker, foreslår oppskrifter basert på tilbudsvarer, og lar brukerne lage handleliste direkte i appen. Unik tilnærming til enkel og intuitiv utforskning av tilbudsvarer. Forenkler brukernes dagligvarehandel med fokus på effektivitet og brukervennlighet.",
            longDescription: "A longer description for the MealDeal project. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            cover: mealDealImage,
            images: [
                `https://picsum.photos/id/${Math.floor(Math.random() * (600 - 100 + 1)) + 100}/300/200`,
                // Add more image URLs as needed
            ],
            timeFrom: 2023,
            timeTo: 2024,
        },
    ],
    development: [

        {
            id: 3,
            title: "Digitalisert Speedinterview-tjeneste",
            shortDescription: "Prosjektet fokuserer på å automatisere og forbedre administrative oppgaver knyttet til speedintervjuprosessen for Experis' salgsteam.",
            longDescription: "A longer description for the Digitalisert Speedinterview-tjeneste project. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            cover: `https://picsum.photos/id/${Math.floor(Math.random() * (600 - 100 + 1)) + 100}/300/200`,
            images: [
                `https://picsum.photos/id/${Math.floor(Math.random() * (600 - 100 + 1)) + 100}/300/200`,
                // Add more image URLs as needed
            ],
            timeFrom: 2023,
            timeTo: null, // Ongoing project
        }, {
            id: 1,
            title: "Automatisering av dataflyt fra nasjonale kartbaser til AI-algoritmer",
            shortDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
            longDescription: "A longer description for the UX project. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            cover: `https://picsum.photos/id/${Math.floor(Math.random() * (600 - 100 + 1)) + 100}/300/200`,
            images: [
                `https://picsum.photos/id/${Math.floor(Math.random() * (600 - 100 + 1)) + 100}/300/200`,
                // Add more image URLs as needed
            ],
            timeFrom: 2024,
            timeTo: 2024,
        },
        {
            id: 4,
            title: "HvZ Game Management System",
            shortDescription: "HvZ Game Management System var et fire-ukers 'full-stack development'. Målet var å administrere og koordinere samtidige Human vs Zombies-spill, gi spillere et oversiktlig grensesnitt, og tillate administratorer å opprette, administrere og analysere spill.",
            longDescription: "A longer description for the HvZ Game Management System project. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            cover: `https://picsum.photos/id/${Math.floor(Math.random() * (600 - 100 + 1)) + 100}/300/200`,
            images: [
                `https://picsum.photos/id/${Math.floor(Math.random() * (600 - 100 + 1)) + 100}/300/200`,
                // Add more image URLs as needed
            ],
            timeFrom: 2023,
            timeTo: 2023,
        },
        {
            id: 5,
            title: "Nettbasert utleiesystem",
            shortDescription: "Prosjektet fokuserte på å utvikle en nettside som var dedikert til intern utlån av maskiner og utstyr innenfor bedriften.",
            longDescription: "A longer description for the Nettbasert utleiesystem project. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            cover: `https://picsum.photos/id/${Math.floor(Math.random() * (600 - 100 + 1)) + 100}/300/200`,
            images: [
                `https://picsum.photos/id/${Math.floor(Math.random() * (600 - 100 + 1)) + 100}/300/200`,
                // Add more image URLs as needed
            ],
            timeFrom: 2021,
            timeTo: null, // Ongoing project
        },
    ],
};

export default projects;
