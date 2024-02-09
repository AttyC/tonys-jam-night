import Hero from './Hero';
import Welcome from './Welcome';
import Title from './Title';
import IMAGES from '../images/Images';
import EmailIcon from './EmailIcon';
import PhoneIcon from './PhoneIcon';
import MusicIcons from './MusicIcons';
import EventType from './EventType';
import { useEffect, useState } from 'react';

const Home = () => {
    return (
        <>
            <>
                <Hero />
                <div className="stamp bg-yellow-300 text-black text-center text-sm md:text-xl py-2 mb-4 font-semibold">
                    Next session : Sunday 11 Feb from 5pm
                </div>

                <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                    <div className="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                        <div className="my-3 py-3">
                            <h2 className="display-5">Another headline</h2>
                            <p className="lead">
                                And an even wittier subheading.
                            </p>
                        </div>
                        <div className="bg-light shadow-sm mx-auto"></div>
                    </div>
                    <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                        <div className="my-3 p-3">
                            <h2 className="display-5">Another headline</h2>
                            <p className="lead">
                                And an even wittier subheading.
                            </p>
                        </div>
                        <div className="bg-dark shadow-sm mx-auto"></div>
                    </div>
                </div>
                {/* The types */}
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
                <section className="main md:w-8/12 md:mx-auto  text-gray-100 bg-gray-950">
                    <Welcome />
                    <section className="text-center text-lg">
                        <Title id="showcase" title="The Showcase"></Title>
                        <p className="text-md md:text-lg px-4 md:px-8 pb-2 font-semibold text-center">
                            Please contact me if you wish to do a few songs with
                            your band, or use the services of the house band!
                        </p>{' '}
                        <ul className="px-8">
                            <li className="text-md md:text-lg px-4 py-2">
                                <span className="font-semibold">
                                    Guitarists and bassists
                                </span>
                                , just bring your guitars.
                            </li>
                            <li className="text-md md:text-lg px-4 py-2">
                                <span className="font-semibold">Drummers</span>{' '}
                                need only bring sticks - full drum set supplied,
                                including all breakables: snare, cymbals etc.
                            </li>
                            <li className="text-md md:text-lg px-4 py-2">
                                <span className="font-semibold">Singers</span>,
                                microphones will be supplied.
                            </li>
                        </ul>
                        <MusicIcons />
                    </section>
                    <section className="p-8 text-lg">
                        <Title id="jam" title="The Jam"></Title>
                        <p className="text-md md:text-lg px-2 pb-2 font-semibold text-center">
                            Here is a chance to jam and network with other
                            musicians and singers. Full back line supplied.
                        </p>{' '}
                        <h3 className="text-center font-medium uppercase py-3">
                            Back line equipment
                        </h3>
                        <ul className="list-disc mx-2 md:flex md:flex-col md:justify-center md:items-center">
                            <li className="text-md md:text-lg px-4 py-2">
                                Guitar and bass amps
                            </li>
                            <li className="text-md md:text-lg px-4 py-2">
                                Full Pearl drum kit with cymbals ( Zildian and
                                Sabian )
                            </li>
                            <li className="text-md md:text-lg px-4 py-2">
                                Korg Krome piano synth with pedal
                            </li>
                            <li className="text-md md:text-lg px-4 py-2">
                                Full mackie PA with Foldback and vocal mics
                            </li>
                        </ul>
                        <MusicIcons />
                    </section>
                    <Title id="contact" title="Contact"></Title>
                    <h3 className="text-center font-medium">
                        Contact me for more information on the Showcase or the
                        Jam.
                        <br /> I prefer WhatsApp as it's quicker!{' '}
                    </h3>
                    <section className="p-8 text-lg">
                        <ul className="flex flex-col align-middle md:justify-center md:flex-row">
                            <li className="py-2 flex justify-center">
                                <a
                                    aria-label="Chat on WhatsApp"
                                    className="whatsApp"
                                    target="_blank"
                                    href="https://wa.me/447809073148?text=Hi!%20I'm%20interested%20in%20the%20Bugle%20Horn%20jam%20event%20."
                                >
                                    <img
                                        src={IMAGES.whatsApp}
                                        alt="Chat on WhatsApp"
                                        className="w-56 md:w-44"
                                    />
                                </a>
                            </li>
                            <li className=" py-2 md:ml-4 flex justify-center">
                                <PhoneIcon />
                                <a
                                    className="font-semibold text-gray-100 self-center px-2"
                                    href="tel:447809073148"
                                >
                                    Phone
                                </a>
                            </li>
                            <li className=" py-2 flex justify-center">
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
