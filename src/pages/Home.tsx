
import CardGroup from '../components/cards/Cardgroup';
import Hero from '../components/Hero';
import projects from '../data/projectsData';
import frontendImg from '../assets/images/aigen-computer.jpg';
import uxImg from '../assets/images/aigen-computer-2.jpg';


function Home() {
    const passions = [
        {
            id: 1,
            imageSrc: frontendImg,
            title: 'Front-end development',
            description: '(React, Javascript, Typescript, Bootstrap, Tailwind)',
        },
        {
            id: 2,
            imageSrc: uxImg,
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

        <div className='space-y-20'>
            <Hero />
            <CardGroup items={passions} header='Additional Passions' />
            <CardGroup items={projects} header='Projects' />
        </div>
    )
}

export default Home