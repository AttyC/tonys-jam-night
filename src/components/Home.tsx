import Hero from './Hero';
import Welcome from './Welcome';
import Contact from './Contact';
import EventType from './EventType';

const Home = () => {
    return (
        <>
            <Hero />
            <section className="main col-12 col-md-9 mx-auto  text-gray-100 bg-gray-950  w3-animate-opacity">
                <Welcome />
                {/* <div className="row align-items-md-stretch  border-t-2 border-double border-orange-400 "> */}
                <EventType
                    id="showcase"
                    title="The Showcase"
                    img="band-bg"
                    row="flex-row"
                    style={{ bg: 'dark', text: 'white', title: 'white' }}
                />

                {/* <div className="band-bg col-12 col-md-5 py-6 mb-2"></div>
                    <div className="singers-bg col-12 col-md-5 py-6 mb-2"></div> */}
                <EventType
                    id="jam"
                    title="The Jam"
                    img="singers-bg"
                    row="flex-row-reverse"
                    style={{ bg: 'light', text: 'black', title: 'white' }}
                />
                {/* </div> */}
                <Contact />
            </section>
        </>
    );
};

export default Home;
