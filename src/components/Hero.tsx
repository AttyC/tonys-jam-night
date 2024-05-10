import Stamp from './Stamp';

const Hero = () => {
    return (
        <section className="hero-bg bg-blend-darken  border-b-2 border-double border-b-orange-700 w3-animate-opacity">
            <div className="alert w3-animate-opacity text-white text-center text-lg md:text-md lg:text-xl py-2 mb-4 font-semibold">
                <p>POSTPONED for a short while</p>
            </div>{' '}
            <h1
                className="hero-title text-white tracking-wider  w3-animate-opacity 
             hover:text-orange-400 font-semibold text-center body-font font-nineteeneighty max65 bg-gray-900 bg-opacity-90"
            >
                Bugle Horn <br />
                Showcase and Jam
            </h1>
            <p className="text-sm md:text-md lg:text-xl mt-4 tracking-wider text-center uppercase text-gray-100 bg-gray-950 md:p-1 font-semibold max65">
                Showcase + Jam Session in Charlton, SE7
            </p>
            <Stamp />
        </section>
    );
};

export default Hero;
