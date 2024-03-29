import MusicIcons from './MusicIcons';

const Welcome = () => (
    <>
        <section className=" col-12 my-6 text:lg">
            <div className="flex flex-col md:flex-row">
                <div className="col-md-9 py-6 ">
                    <div className={`p-4 md:p-5 rounded-3`}>
                        <h2 className="font-nineteeneighty  text-orange-400 text-4xl md:text-6xl flex flex-col tracking-wider">
                            Welcome!{' '}
                        </h2>{' '}
                        <p className="font-medium text-md text:lg py-8">
                            Hi, I’m Tony, a local drummer, living in Charlton.
                            I'm hosting a friendly, local music event with a{' '}
                            <span className="font-semibold text-orange-400">
                                band showcase
                            </span>{' '}
                            and a{' '}
                            <span className="font-semibold text-orange-400">
                                music jam
                            </span>{' '}
                            . It's in the function room at the Bugle Horn pub in
                            Charlton Village.
                        </p>
                        <p className="font-semibold text-orange-400 md:lead">
                            {' '}
                            Are you in a local band?
                        </p>
                        <p className="font-medium py-2 ">
                            I’m inviting local bands to come along and showcase
                            their music at the event.
                        </p>
                        <p className="font-medium pb-2">
                            Cover and originals welcome - All styles welcome
                        </p>
                        <p className="font-medium pb-2">
                            <a href="#contact">
                                {' '}
                                Contact me to book your slot!
                            </a>
                        </p>
                        <p className="font-medium py-2">----</p>
                        <p className="font-semibold text-orange-400 md:lead">
                            {' '}
                            Do you just fancy a jam?
                        </p>
                        <p className="font-medium py-2">
                            There will also be a chance for any musicians to
                            take part in a jam with the house band.
                        </p>
                        <MusicIcons />
                    </div>
                </div>
                <div className="tony-bg col-12 col-md-3 py-6 "></div>
            </div>
        </section>
        <section className=" col-12 my-6 text:lg ">
            <div className="flex flex-col-reverse md:flex-row">
                <div className="singers-bg col-12 col-md-3 py-6 "></div>
                <div className="col-md-6 py-6 date-time  ">
                    <div className={`px-3 md:px-5 rounded-3`}>
                        <p>
                            <span className="font-semibold ">When:</span> Sunday
                            11th February 2024 from 5pm onwards
                        </p>
                        <p className="py-2">
                            {' '}
                            <span className="font-semibold ">Where:</span> Bugle
                            Horn Pub, 6 The Village , Charlton SE7 8UD
                        </p>
                        <p>
                            <a
                                className=" uppercase text-sm font-semibold"
                                href="https://maps.app.goo.gl/krZwstT3oqk9DpfY7"
                            >
                                Get Directions
                            </a>
                        </p>
                        <p>-------------------</p>
                        <p className=" py-2">
                            <span className="font-semibold ">Free entry</span>{' '}
                            plus full back line
                        </p>
                    </div>
                </div>
                <div className="band-bg col-12 col-md-3 py-6 "></div>
            </div>
        </section>{' '}
    </>
);

export default Welcome;
