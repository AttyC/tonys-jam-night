import MusicIcons from './MusicIcons';

const Welcome = () => (
    <>
        {' '}
        <section className="welcome-message mx-4 md:mx-0 px-4 pb-6 text:lg  text-center">
            <h2 className="font-nineteeneighty text-4xl md:text-6xl text-center pt-6 flex flex-col tracking-wider">
                Welcome!{' '}
                <span className="py-2 text-sm md:text-2xl">🎸🥁 🎤 🎹 </span>
            </h2>{' '}
            <h2 className="font-semibold text-md text:lg md:text-xl py-4">
                Hi, I’m Tony, a local drummer, living in Charlton.
            </h2>
            <p>-------------------</p>
            <p className="font-medium py-2">
                Come to a great local music event in the Function Room at the
                Bugle Horn Pub, 6 The Village , Charlton SE7 8UD.
            </p>
            <p className="font-medium py-2">
                The event with be in two parts - the{' '}
                <span className="font-semibold text-orange-400">showcase</span>{' '}
                and the{' '}
                <span className="font-semibold text-orange-400">jam</span>.
            </p>{' '}
            <MusicIcons />
            <p className="font-medium py-2">
                I’m inviting local musicians and bands to come along and
                showcase their music.
            </p>
            <p className="font-medium py-2">Covers and originals welcome.</p>
            <p className="font-medium py-2">
                Following that, a chance for all musicians to take part in a jam
                with the house band.
            </p>
            <p className="font-medium py-2">All styles welcome.</p>
            <MusicIcons />
            <div className="date-time  my-8 p-4">
                <p className="py-2">
                    <span className="font-semibold ">When:</span> Sunday 11th
                    February 2024 from 5pm onwards
                </p>
                <p className="py-2">
                    {' '}
                    <span className="font-semibold ">Where:</span> Bugle Horn
                    Pub, 6 The Village , Charlton SE7 8UD
                </p>
                <p>
                    <a
                        className=" uppercase text-sm font-semibold"
                        href="https://maps.app.goo.gl/krZwstT3oqk9DpfY7"
                    >
                        Get Directions
                    </a>
                </p>
            </div>
            <p className="font-semibold py-2">Free entry plus full back line</p>
            <p>-------------------</p>
        </section>{' '}
    </>
);

export default Welcome;
