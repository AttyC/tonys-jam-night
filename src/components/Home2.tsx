import Card from './Card';
import FAQS from './FAQS';
import IMAGES from '../images/Images';

const Home2 = () => {
    return (
        <>
            <Card />
            <section className="main md:w-8/12 md:mx-auto my-8 md:my-12 bg-gray-950">
                <section className="welcome-message mx-4 md:mx-0 px-8 py-8 bg-gray-100 text-gray-950">
                    <h1 className="description text-sm pb-4 md:text-2xl font-semibold text-center">
                        Welcome to Tony's Function Junction 🎸
                    </h1>{' '}
                    <p className="text-sm font-semibold md:text-xl">
                        {' '}
                        Description - general - in your own tone of voice - bit
                        about you/ some kind of welcoming message
                    </p>
                </section>
                <section
                    id="contact"
                    className=" flex justify-center align-middle py-12"
                >
                    <div className=" text-white tracking-wide font-semibold text-center mx-6  body-font font-nineteeneighty text-2xl">
                        ----------
                    </div>{' '}
                    <h2
                        className="description text-md md:text-3xl text-orange-400 
                font-semibold text-center"
                    >
                        What's On
                    </h2>
                    <div className=" text-white tracking-wide font-semibold text-center mx-6 body-font font-nineteeneighty text-2xl">
                        ----------
                    </div>
                </section>

                <section
                    id="jam"
                    className="divider flex justify-center align-middle py-4 md:py-8"
                >
                    <div className="text-white font-semibold text-center mx-6 md:flex hidden body-font font-nineteeneighty text-2xl">
                        -----
                    </div>{' '}
                    <h2
                        className="description
                font-semibold
                "
                    >
                        <span className="font-nineteeneighty text-lg md:text-2xl tracking-widest">
                            The Music Jam
                        </span>{' '}
                    </h2>
                    <div className=" text-white tracking-wide font-semibold md:flex hidden text-center mx-6 body-font font-nineteeneighty text-2xl">
                        -----
                    </div>
                </section>
                {/* <section
                    id="jam"
                    className="divider flex justify-center align-middle py-8"
                >
                    <div className="text-white font-semibold text-center mx-6 md:flex hidden body-font font-nineteeneighty text-2xl">
                        -----
                    </div>{' '}
                    <h2
                        className="description
                font-semibold
                "
                    >
                        <span className="font-nineteeneighty text-6xl tracking-widest">
                            The Music Jam
                        </span>{' '}
                    </h2>
                    <div className=" text-white tracking-wide font-semibold md:flex hidden text-center mx-6 body-font font-nineteeneighty text-2xl">
                        -----
                    </div>
                </section> */}
                <p className="text-sm md:text-xl px-8">
                    Come along and play songs with other musicians / support/
                    mix of levels, all welcome etc
                </p>
                <section className="who-its-for p-8 bg-gray-950">
                    <h4 className="description md:text-2xl py-4 font-semibold">
                        Who it's for
                    </h4>
                    <p className="text-sm md:text-xl">blah blah blah</p>
                </section>
                {/* <div className="w-full text-white tracking-wide font-semibold text-center my-8 body-font font-nineteeneighty  text-2xl">
                    ----------------------------------------
                </div> */}
                <section className="flex justify-center">
                    <img
                        src={IMAGES.mic}
                        alt="acoustic guitar player in pale light"
                        className="w-full md:w-9/12 opacity-60"
                    />
                </section>
                <section className="how-it-works p-8">
                    <h4 className="description md:text-2xl py-4 font-semibold">
                        How it works
                    </h4>
                    <p className="text-sm md:text-xl">Equipment supplied</p>
                    <p className="text-sm md:text-xl">
                        Accompaniment available - House Band
                    </p>
                    <p className="text-sm md:text-xl">
                        CHECK OUT THESE RULES: <br />{' '}
                        <a href="http://www.leytonstonebluesjam.co.uk/essential_fyi.shtml">
                            HOUSE RULES
                        </a>
                    </p>
                </section>
                <section
                    id="faqs"
                    className="divider flex justify-center align-middle py-12"
                >
                    <div className=" text-white tracking-wide font-semibold text-center mx-6  body-font font-nineteeneighty text-2xl">
                        ----------
                    </div>{' '}
                    <h2
                        className="description text-md md:text-3xl text-orange-400 
                font-semibold text-center"
                    >
                        Questions
                    </h2>
                    <div className=" text-white tracking-wide font-semibold text-center mx-6 body-font font-nineteeneighty text-2xl">
                        ----------
                    </div>
                </section>
                <FAQS />

                <section
                    id="contact"
                    className=" flex justify-center align-middle py-12"
                >
                    <div className=" text-white tracking-wide font-semibold text-center mx-6  body-font font-nineteeneighty text-2xl">
                        ----------
                    </div>{' '}
                    <h2
                        className="description text-md md:text-3xl text-orange-400 
                font-semibold text-center"
                    >
                        Contact
                    </h2>
                    <div className=" text-white tracking-wide font-semibold text-center mx-6 body-font font-nineteeneighty text-2xl">
                        ----------
                    </div>
                </section>

                <section className="mx-8">
                    <div>
                        <p className="text-sm md:text-xl">
                            <a href="tel:07000 000000">Call / WhatsApp???</a>
                        </p>
                        <p className="text-sm md:text-xl">Instagram</p>
                        <p className="text-sm md:text-xl">Email link</p>
                        <p className="text-sm md:text-xl">
                            Link to pub directions
                        </p>
                    </div>
                </section>
                {/* <p className="text-sm md:text-xl">
                        <a href="tel:07000 000000">Call / WhatsApp???</a>
                    </p>
                    <p className="text-sm md:text-xl">Instagram</p>
                    <p className="text-sm md:text-xl">Email link</p>
                    <p className="text-sm md:text-xl">Link to pub directions</p> */}
            </section>
        </>
    );
};

export default Home2;
