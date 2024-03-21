
import CardGroup from '../components/cards/Cardgroup';
import Hero from '../components/Hero';
import Projects from '../components/project/Projects';
import passions from '../data/passionsData';



function Home() {

    return (
        <div className='-0'>
            <div className='md:space-y-20 mx-auto flex justify-center items-center flex-col ' >
                <Hero />
                <CardGroup items={passions} header='My Passions' />
                <div id="projects" className='md:pt-24 '>
                    <Projects />
                </div>
            </div></div>
    )
}

export default Home