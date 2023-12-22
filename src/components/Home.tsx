import Hero from './Hero';
import Welcome from './Welcome';
import Title from './Title';
import Subtitle from './Subtitle';
import FAQS from './FAQS';

const Home = () => {
    return (
        <>
            <Hero />
            <section className="main md:w-8/12 md:mx-auto my-8 md:my-12 ">
                <Welcome />
                <Title id="jam" title="The Music Jam"></Title>
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
                <FAQS />
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
                {/* <p className="text-md md:text-xl">
                        <a href="tel:07000 000000">Call / WhatsApp???</a>
                    </p>
                    <p className="text-md md:text-xl">Instagram</p>
                    <p className="text-md md:text-xl">Email link</p>
                    <p className="text-md md:text-xl">Link to pub directions</p> */}
            </section>
        </>
    );
};

export default Home;
