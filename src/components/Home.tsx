import Hero from './Hero';
import Welcome from './Welcome';
import Contact from './Contact';
import EventType from './EventType';

const Home = () => {
    return (
        <>
            <Hero />
            <section className="main col-12 col-md-9 mx-auto  text-gray-100 bg-gray-950">
                <Welcome />
                <div className="row align-items-md-stretch">
                    <EventType
                        id="showcase"
                        title="The Showcase"
                        style={{ bg: 'dark', text: 'white', title: 'white' }}
                    />
                    <EventType
                        id="jam"
                        title="The Jam"
                        style={{ bg: 'light', text: 'black', title: 'white' }}
                    />
                </div>
                <Contact />
            </section>
        </>
    );
};

export default Home;
