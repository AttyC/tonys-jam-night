import Hero from './Hero';
import Welcome from './Welcome';
import Contact from './Contact';
import EventType from './EventType';
import Stamp from './Stamp';

const Home = () => {
    return (
        <>
            <Hero />
            <Stamp />
            <section className="main col-md-8 mx-auto  text-gray-100 bg-gray-950">
                <Welcome />
                <div className="row align-items-md-stretch">
                    <EventType
                        id="showcase"
                        title="The Showcase"
                        style={{ bg: 'dark', text: 'white' }}
                    />
                    <EventType
                        id="jam"
                        title="The Jam"
                        style={{ bg: 'light', text: 'black' }}
                    />
                </div>
                <Contact />
            </section>
        </>
    );
};

export default Home;
