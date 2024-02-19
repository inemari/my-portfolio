
import CardGroup from '../components/cards/Cardgroup';
import Hero from '../components/Hero';
import projects from '../data/projectsData';

function Home() {
    const passions = [
        {
            id: 1,
            imageSrc: `https://picsum.photos/id/${Math.floor(Math.random() * (600 - 100 + 1)) + 100}/300/200`,
            title: 'Front-end development',
            description: '(React, Javascript, Typescript, Bootstrap, Tailwind)',
        },
        {
            id: 2,
            imageSrc: `https://picsum.photos/id/${Math.floor(Math.random() * (600 - 100 + 1)) + 100}/300/200`,
            title: 'UI/UX Design',
            description: '(Figma)',
        }, {
            id: 3,
            imageSrc: `https://picsum.photos/id/${Math.floor(Math.random() * (600 - 100 + 1)) + 100}/300/200`,
            title: 'Front-end development',
            description: '(React, Javascript, Typescript, Bootstrap, Tailwind)',
        },
    ];


    return (

        <>
            <Hero />
            <CardGroup items={passions} header='Additional Passions' />
            <CardGroup items={projects} header='Projects' />
        </>
    )
}

export default Home