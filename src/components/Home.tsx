import Hero from './Hero';
import Welcome from './Welcome';
import Title from './Title';
// import Subtitle from './Subtitle';
// import FAQS from './FAQS';
import IMAGES from '../images/Images';
import EmailIcon from './EmailIcon';
import PhoneIcon from './PhoneIcon';
import MusicIcons from './MusicIcons';

const Home = () => {
    return (
        <>
            <>
                <Hero />
                <section className="main md:w-8/12 md:mx-auto  text-gray-100 bg-gray-950">
                    <Welcome />
                    <section className="text-center">
                        <Title id="showcase" title="The Showcase"></Title>
                        <p className="text-md md:text-lg px-8 pb-2 font-semibold text-center">
                            Please contact me if you wish to do a few songs with
                            your band, or use the services of the house band!
                        </p>{' '}
                        <ul>
                            <li className="text-md md:text-lg px-8 py-2">
                                Guitarists and bassists, just bring your
                                guitars.
                            </li>
                            <li className="text-md md:text-lg px-8 py-2">
                                Drummers need only bring sticks - full drum set
                                supplied, including all breakables: snare,
                                cymbals etc.
                            </li>
                            <li className="text-md md:text-lg px-8 py-2">
                                Singers, microphones will be supplied.
                            </li>
                        </ul>
                        <MusicIcons />
                    </section>
                    <section className="text-center">
                        <Title id="jam" title="The Jam"></Title>
                        <p className="text-md md:text-lg px-8 pb-2 font-semibold text-center">
                            Here is a chance to jam and network with other
                            musicians and singers. Full back line supplied.
                        </p>{' '}
                        <h3 className="text-center font-medium uppercase py-3">
                            Back line equipment
                        </h3>
                        <ul>
                            <li className="text-md md:text-lg px-8 py-2">
                                Guitar and bass amps
                            </li>
                            <li className="text-md md:text-lg px-8 py-2">
                                Full Pearl drum kit with cymbals ( Zildian and
                                Sabian )
                            </li>
                            <li className="text-md md:text-lg px-8 py-2">
                                Korg Krome piano synth with pedal
                            </li>
                            <li className="text-md md:text-lg px-8 py-2">
                                Full mackie PA with Foldback and vocal mics
                            </li>
                        </ul>
                        <MusicIcons />
                    </section>
                    {/* <section className="img-divider mx-4"></section> */}
                    {/* <section className="how-it-works p-8">
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
                    </section> */}
                    {/* <Title id="faqs" title="Questions"></Title>
                    <FAQS /> */}
                    <Title id="contact" title="Contact"></Title>
                    <h3 className="text-center font-medium">
                        Contact me for more information on the Showcase or the
                        Jam.
                        <br /> I prefer WhatsApp as it's quicker!{' '}
                    </h3>
                    <section className="p-8">
                        <ul className="flex justify-center">
                            <li className="py-2">
                                <a
                                    aria-label="Chat on WhatsApp"
                                    className="whatsApp"
                                    href="https://wa.me/+447809083148?text=I'm%20interested%20in%20the%20buglehorn%20music%20event%20"
                                >
                                    <img
                                        src={IMAGES.whatsApp}
                                        alt="Chat on WhatsApp"
                                        className="w-44 md:w-44"
                                    />
                                </a>
                            </li>
                            <li className=" py-2 ml-4 flex">
                                <PhoneIcon />
                                <a
                                    className="font-semibold text-gray-100 self-center px-2"
                                    href="tel:+447809083148"
                                >
                                    Phone
                                </a>
                            </li>
                            <li className=" py-2 flex">
                                <EmailIcon />
                                <a
                                    aria-label="Email"
                                    href="mailto:tonydooley59@gmail.com"
                                    className="font-semibold text-gray-100 self-center px-2"
                                >
                                    {' '}
                                    Email{' '}
                                </a>
                            </li>
                        </ul>
                    </section>
                </section>
            </>{' '}
            <>
                <Hero />
                <section className="main md:w-8/12 md:mx-auto  bg-gray-100 text-gray-950">
                    <Welcome />
                    <Title id="showcase" title="The Showcase"></Title>
                    <p className="text-md md:text-lg px-8 pb-2 font-semibold text-center">
                        Please contact me if you wish to do a few songs with
                        your band, or use the services of the house band!
                    </p>{' '}
                    <ul>
                        <li className="text-md md:text-lg px-8 py-2">
                            Guitarists and bassists, just bring your guitars.
                        </li>
                        <li className="text-md md:text-lg px-8 py-2">
                            Drummers need only bring sticks - full drum set
                            supplied, including all breakables: snare, cymbals
                            etc.
                        </li>
                        <li className="text-md md:text-lg px-8 py-2">
                            Singers, microphones will be supplied.
                        </li>
                    </ul>
                    <Title id="jam" title="The Jam"></Title>
                    <p className="text-md md:text-lg px-8 pb-2 font-semibold text-center">
                        Here is a chance to jam and network with other musicians
                        and singers. Full back line supplied.
                    </p>{' '}
                    <h3 className="text-center font-medium uppercase py-3">
                        Back line equipment
                    </h3>
                    <ul>
                        <li className="text-md md:text-lg px-8 py-2">
                            Guitar and bass amps
                        </li>
                        <li className="text-md md:text-lg px-8 py-2">
                            Full Pearl drum kit with cymbals ( Zildian and
                            Sabian )
                        </li>
                        <li className="text-md md:text-lg px-8 py-2">
                            Korg Krome piano synth with pedal
                        </li>
                        <li className="text-md md:text-lg px-8 py-2">
                            Full mackie PA with Foldback and vocal mics
                        </li>
                    </ul>
                    {/* <section className="img-divider mx-4"></section> */}
                    {/* <section className="how-it-works p-8">
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
                    </section> */}
                    {/* <Title id="faqs" title="Questions"></Title>
                    <FAQS /> */}
                    <Title id="contact" title="Contact"></Title>
                    <h3 className="text-center font-medium">
                        Contact me for more information on the Showcase or the
                        Jam.
                        <br /> I prefer WhatsApp as it's quicker!{' '}
                    </h3>
                    <section className="p-8">
                        <ul className="md:flex md:justify-center">
                            <li className="text-md md:text-lg  py-2">
                                <a
                                    aria-label="Chat on WhatsApp"
                                    className="whatsApp"
                                    href="https://wa.me/+447809083148?text=I'm%20interested%20in%20the%20buglehorn%20music%20event%20"
                                >
                                    <img
                                        src={IMAGES.whatsApp}
                                        alt="Chat on WhatsApp"
                                        className="w-28 md:w-44"
                                    />
                                </a>
                            </li>
                            <li className="text-xs md:text-lg  py-2 ">
                                <PhoneIcon />
                                <a
                                    className="font-semibold text-gray-100 self-center px-2"
                                    href="tel:+447809083148"
                                >
                                    Phone
                                </a>
                            </li>
                            <li className="text-xs md:text-md py-2 flex align-middle">
                                <EmailIcon />
                                <a
                                    aria-label="Email"
                                    href="mailto:tonydooley59@gmail.com"
                                    className="font-semibold text-gray-100 self-center px-2"
                                >
                                    {' '}
                                    Email{' '}
                                </a>
                            </li>
                        </ul>
                    </section>
                </section>
            </>{' '}
        </>
    );
};

export default Home;
