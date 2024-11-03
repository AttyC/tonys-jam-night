import MusicIcons from './MusicIcons';

const Welcome = () => (
    <>
        <section className=" col-12 my-6 text:lg">
            <div className="flex flex-col md:flex-row">
                <div className="col-md-9 py-6 ">
                    <div className={` md:p-5 rounded-3 `}>
                        <h2 className="font-nineteeneighty text-white text-center text-5xl md:text-6xl p-8 flex flex-col tracking-wider">
                            Welcome!{' '}
                        </h2>{' '}
                        <p className="font-medium text-md text:lg p-4">
                            Hi, I’m Tony, a local drummer, living in Charlton.
                            I'm hosting a friendly, local music event with a{' '}
                            <span className="font-semibold">BAND SHOWCASE</span>{' '}
                            and a{' '}
                            <span className="font-semibold">MUSIC JAM</span>.
                            It's in the function room at the Bugle Horn pub in
                            Charlton Village.
                        </p>
                        <div className="text-center">
                            <p className="font-semibold md:lead text-center text-lg md:text-xl text-yellow-400">
                                {' '}
                                Are you in a local band?
                            </p>
                            <p className="font-medium text-md text:lg p-2">
                                I’m inviting local bands to come along and
                                showcase their music at the event.
                            </p>
                            <p className="font-medium pb-2">
                                Cover and originals welcome - All styles welcome
                            </p>
                            <p className="font-medium py-4 transition ease-in-out hover:-translate-y-1 hover:scale-110">
                                <a
                                    href="#contact"
                                    className="text-center text-purple-950 
                                    font-semibold stamp px-5 py-2 no-underline"
                                >
                                    {' '}
                                    Book your slot!
                                </a>
                            </p>
                            <p className="font-medium py-2">----</p>
                            <p className="font-semibold text-yellow-400 md:lead text-lg md:text-xl">
                                {' '}
                                Do you just fancy a jam?
                            </p>
                            <p className="font-medium p-4">
                                There will also be a chance for any musicians to
                                take part in a jam with the house band.
                            </p>
                            <MusicIcons />
                        </div>
                    </div>
                </div>
                <div className="tony-bg col-12 col-md-3 py-6 "></div>
            </div>
        </section>
        <section className=" col-12 my-6 text:lg text-center border-t-2 border-double border-orange-400 px-8 py-10">
            <div className={`px-1 md:px-5 rounded-3`}>
                <p>
                    <span className="font-semibold">When:</span> Sunday,
                    December 1st at 5pm
                </p>
                <p className="py-2">
                    {' '}
                    <span className="font-semibold ">Where:</span> Bugle Horn
                    Pub, 6 The Village , Charlton SE7 8UD
                </p>
                <p>
                    <a
                        className=" uppercase font-semibold"
                        href="https://maps.app.goo.gl/krZwstT3oqk9DpfY7"
                    >
                        Get Directions
                    </a>
                </p>
                <p>-------------------</p>
                <p className="py-2">
                    <span className="font-semibold ">Free entry</span> plus full
                    back line
                </p>
            </div>
        </section>{' '}
    </>
);

export default Welcome;
