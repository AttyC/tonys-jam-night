import MusicIcons from './MusicIcons';

const Welcome = () => (
    <>
        <section className=" col-12 my-6 text:lg">
            <div className="flex ">
                <div className="col-md-9  py-6 ">
                    <div className={` p-5 rounded-3`}>
                        <h2 className="font-nineteeneighty text-4xl md:text-6xl flex flex-col tracking-wider">
                            Welcome!{' '}
                        </h2>{' '}
                        <p className="font-semibold text-md text:lg md:text-xl py-4">
                            Hi, I’m Tony, a local drummer, living in Charlton.
                        </p>
                        <p className="font-semibold text-orange-400">
                            {' '}
                            Are you in a local band?
                        </p>
                        <p className="font-medium py-2">
                            I’m inviting local bands to come along and showcase
                            their music at a great local music event at the
                            Bugle Horn pub in Charlton Village.
                        </p>
                        <p className="font-medium py-2">
                            Cover and originals welcome - All styles welcome
                        </p>
                        <p className="font-medium py-2">----</p>
                        <p className="font-semibold text-orange-400">
                            {' '}
                            Do you just fancy a jam?
                        </p>
                        <p className="font-medium py-2">
                            Following that, a chance for all musicians to take
                            part in a jam with the house band.
                        </p>
                        <MusicIcons />
                    </div>
                </div>
            </div>
        </section>{' '}
        <section className=" col-12 my-6 text:lg bg-orange-700 ">
            <div className="flex ">
                <div className="col-md-3 bg-gray-100 flex justify-center py-6 band-bg"></div>
                <div className="col-md-9  py-6 ">
                    <div className={` px-5 rounded-3`}>
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
            </div>
        </section>{' '}
    </>
);

export default Welcome;
