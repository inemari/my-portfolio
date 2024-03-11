
import CardGroup from '../components/cards/Cardgroup';
import Hero from '../components/Hero';
import Projects from '../components/project/Projects';
import passions from '../data/passionsData';



function Home() {

    return (

        <div className='space-y-20 mx-auto flex justify-center items-center flex-col '>
         
                <Hero />
            <CardGroup items={passions} header='Additional Passions' />
            {/* <CardGroup items={projects.ux && projects.development} header='Projects' /> */}
            {/* <CardGroup items={projects.development} header='Projects' /> */}
            <Projects />
        </div>
    )
}

export default Home