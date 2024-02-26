
import CardGroup from '../components/cards/Cardgroup';
import Hero from '../components/Hero';
import passions from '../data/passionsData';
import projects from '../data/projectsData';



function Home() {

    return (

        <div className='space-y-20'>
         
            <Hero />
            <CardGroup items={passions} header='Additional Passions' />
            <CardGroup items={projects.ux && projects.development} header='Projects' />
            {/* <CardGroup items={projects.development} header='Projects' /> */}

        </div>
    )
}

export default Home