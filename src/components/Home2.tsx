import Hero from './Hero';
import Welcome from './Welcome';
import Title from './Title';
import Subtitle from './Subtitle';
import FAQS2 from './FAQS2';

const Home2 = () => {
    return (
        <>
            <Hero />
            <section className="main md:w-8/12 md:mx-auto  bg-gray-100 text-gray-950">
                <Welcome />
                <Title id="jam" title="The Music Jam"></Title>
                {/* <section id="jam" className="py-4 md:p-8 mx-8 md:mx-0 ">
                    <h2
                        className="description
                font-semibold font-alfaslabone
                "
                    >
                        <span className="text-lg md:text-2xl tracking-widest">
                            The Music Jam
                        </span>{' '}
                    </h2>
                </section> */}
                <p className="text-md md:text-lg px-8">
                    Come along and play songs with other musicians / support/
                    mix of levels, all welcome etc
                </p>
                <section className="who-its-for p-8">
                    <Subtitle subtitle="Who it's for" />
                    <p className="text-md md:text-lg">blah blah blah</p>
                </section>
                <section className="img-divider mx-4"></section>
                <section className="how-it-works p-8">
                    <Subtitle subtitle="How it works" />
                    <p className="text-md md:text-lg">Equipment supplied</p>
                    <p className="text-md md:text-lg">
                        Accompaniment available - House Band
                    </p>
                    <p className="text-md md:text-lg">
                        CHECK OUT THESE RULES: <br />{' '}
                        <a href="http://www.leytonstonebluesjam.co.uk/essential_fyi.shtml">
                            HOUSE RULES
                        </a>
                    </p>
                </section>
                <Title id="faqs" title="Questions"></Title>
                <FAQS2 />
                <Title id="contact" title="Contact"></Title>
                <section className="p-8">
                    <div>
                        <p className="text-md md:text-xl">
                            <a href="tel:07000 000000">Call / WhatsApp???</a>
                        </p>
                        <p className="text-md md:text-lg">Instagram</p>
                        <p className="text-md md:text-lg">Email link</p>
                        <p className="text-md md:text-lg">
                            Link to pub directions
                        </p>
                    </div>
                </section>
            </section>
        </>
    );
};

export default Home2;
